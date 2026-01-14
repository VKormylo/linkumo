export enum ErrorStatusCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export enum ErrorStatus {
  SUCCESS = 'success',
  FAIL = 'fail',
  ERROR = 'error'
}

export interface ErrorResponseInterface {
  statusCode: number
  status?: string
  isOperational?: boolean
}

export class ErrorResponse extends Error implements ErrorResponseInterface {
  statusCode: number
  status?: string
  isOperational?: boolean

  constructor(message: string, statusCode: number = ErrorStatusCode.INTERNAL_SERVER_ERROR) {
    super(message)

    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? ErrorStatus.FAIL : ErrorStatus.ERROR

    this.isOperational = true
    this.name = this.constructor.name

    Error.captureStackTrace(this, this.constructor)
  }
}

export enum PrismaErrorCode {
  DUPLICATE_FIELD = 'P2002'
}
