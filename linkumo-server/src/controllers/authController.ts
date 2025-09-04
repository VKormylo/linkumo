import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '~/lib/prisma'
import { catchAsync } from '~/utils/catchAsync'
import { BCRYPT_SALT_ROUNDS } from '~/constants'
import config from '~/configs'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import { COOKIE_OPTIONS, REFRESH_TOKEN_COOKIE_NAME } from '~/constants/index'
import emailService from '~/services/emailService'
import errors from '~/constants/errors'
import tokenService from '~/services/tokenService'

export const signup = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return next(new ErrorResponse(errors.EMPTY_SIGNUP_CREDENTIALS, ErrorStatusCode.BAD_REQUEST))
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (existingUser) {
    return next(new ErrorResponse(errors.USER_ALREADY_EXISTS, ErrorStatusCode.BAD_REQUEST))
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false
    }
  })

  const verificationToken = tokenService.generateVerificationToken(user.id)
  await emailService.sendVerificationEmail(email, verificationToken)

  res.status(201).json({
    status: 'success',
    message: 'Please verify your email.'
  })
})

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, rememberMe } = req.body

  if (!email || !password) {
    return next(new ErrorResponse(errors.EMPTY_LOGIN_CREDENTIALS, ErrorStatusCode.BAD_REQUEST))
  }

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return next(new ErrorResponse(errors.INVALID_EMAIL_OR_PASSWORD, ErrorStatusCode.BAD_REQUEST))
  }

  if (!user.isEmailConfirmed) {
    return next(new ErrorResponse(errors.EMAIL_NOT_VERIFIED, ErrorStatusCode.FORBIDDEN))
  }

  const { password: userPassword, ...safeUser } = user

  const isPasswordCorrect = await bcrypt.compare(password, userPassword)

  if (!isPasswordCorrect) {
    return next(new ErrorResponse(errors.INVALID_EMAIL_OR_PASSWORD, ErrorStatusCode.BAD_REQUEST))
  }

  const accessToken = tokenService.generateAccessToken(user.id)
  const refreshToken = tokenService.generateRefreshToken(user.id)

  tokenService.setRefreshTokenCookie(res, refreshToken, !rememberMe)

  res.status(200).json({
    status: 'success',
    data: {
      user: safeUser,
      accessToken
    }
  })
})

export const logout = catchAsync(async (_: Request, res: Response) => {
  res.clearCookie(REFRESH_TOKEN_COOKIE_NAME, COOKIE_OPTIONS)

  res.status(200).json({
    status: 'success',
    data: null
  })
})

export const refresh = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE_NAME]

  if (!refreshToken) {
    return next(new ErrorResponse(errors.UNAUTHENTICATED, ErrorStatusCode.UNAUTHORIZED))
  }

  const decoded = tokenService.verifyToken(refreshToken, config.JWT_REFRESH_TOKEN_SECRET)
  const accessToken = tokenService.generateAccessToken(decoded.id)

  res.status(200).json({
    status: 'success',
    data: {
      accessToken
    }
  })
})
