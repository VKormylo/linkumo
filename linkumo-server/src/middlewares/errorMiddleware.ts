import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { ErrorResponse, ErrorStatusCode, ErrorStatus } from '~/types/error.types'
import config from '~/configs'

const sendErrorDev = (err: ErrorResponse, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  })
}

export const handleError: ErrorRequestHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  err.statusCode = err.statusCode || ErrorStatusCode.INTERNAL_SERVER_ERROR
  err.status = err.status || ErrorStatus.ERROR

  if (config.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  }
}
