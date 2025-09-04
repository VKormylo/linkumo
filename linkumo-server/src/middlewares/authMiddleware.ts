import { NextFunction, Request, Response } from 'express'
import { catchAsync } from '~/utils/catchAsync'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import config from '~/configs'
import { prisma } from '~/lib/prisma'
import errors from '~/constants/errors'
import tokenService from '~/services/tokenService'

interface ProtectedRequest extends Request {
  userId: string
}

export const protect = catchAsync(async (req: ProtectedRequest, _: Response, next: NextFunction) => {
  const accessToken = tokenService.retrieveToken(req.headers.authorization)

  if (!accessToken) {
    return next(new ErrorResponse(errors.NOT_LOGGED_IN, ErrorStatusCode.UNAUTHORIZED))
  }

  const decoded = tokenService.verifyToken(accessToken, config.JWT_ACCESS_TOKEN_SECRET)

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id
    }
  })

  if (!user) {
    return next(new ErrorResponse(errors.USER_NO_LONGER_EXISTS, ErrorStatusCode.UNAUTHORIZED))
  }

  req.userId = decoded.id
  next()
})
