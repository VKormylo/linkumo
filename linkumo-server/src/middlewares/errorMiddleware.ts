import { Prisma } from '@prisma/client'
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

import config from '~/configs'

import errors from '~/constants/errors'
import { ErrorResponse, ErrorStatusCode, ErrorStatus, PrismaErrorCode } from '~/types/error.types'

const handleDuplicateFieldsDB = (err: Prisma.PrismaClientKnownRequestError) => {
  const field = (err.meta?.target as string[])[0]
  const model = err.meta?.modelName
  const message = `${model} already exists. Please use another ${field}!`

  return new ErrorResponse(message, ErrorStatusCode.BAD_REQUEST)
}

const handleJWTError = () => {
  return new ErrorResponse(errors.INVALID_TOKEN, ErrorStatusCode.UNAUTHORIZED)
}

const handleJWTExpiredError = () => {
  return new ErrorResponse(errors.TOKEN_EXPIRED, ErrorStatusCode.UNAUTHORIZED)
}

const sendErrorDev = (err: ErrorResponse, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendErrorProd = (err: ErrorResponse, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
  } else {
    res.status(500).json({
      status: ErrorStatus.ERROR,
      message: 'Something went wrong!'
    })
  }
}

export const handleError: ErrorRequestHandler = (err: ErrorResponse, _: Request, res: Response, __: NextFunction) => {
  err.statusCode = err.statusCode || ErrorStatusCode.INTERNAL_SERVER_ERROR
  err.status = err.status || ErrorStatus.ERROR

  if (config.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  } else if (config.NODE_ENV === 'production') {
    let error: ErrorResponse = { ...err }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === PrismaErrorCode.DUPLICATE_FIELD) error = handleDuplicateFieldsDB(err)
    }

    if (err.name === 'JsonWebTokenError') error = handleJWTError()
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError()

    sendErrorProd(error, res)
  }
}
