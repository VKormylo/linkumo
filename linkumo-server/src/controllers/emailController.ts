import { NextFunction, Request, Response } from 'express'
import { prisma } from '~/lib/prisma'
import { catchAsync } from '~/utils/catchAsync'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import config from '~/configs'
import errors from '~/constants/errors'
import tokenService from '~/services/tokenService'

export const verifyEmail = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.query

  if (!token || typeof token !== 'string') {
    return next(new ErrorResponse(errors.INVALID_TOKEN, ErrorStatusCode.BAD_REQUEST))
  }

  const decoded = tokenService.verifyToken(token, config.JWT_VERIFICATION_TOKEN_SECRET)

  await prisma.user.update({
    where: {
      id: decoded.id
    },
    data: { isEmailConfirmed: true }
  })

  res.status(200).json({
    status: 'success',
    message: 'Email verified successfully! You can login now.'
  })
})
