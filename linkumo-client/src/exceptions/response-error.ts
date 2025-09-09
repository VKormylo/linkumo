import type { ErrorResponse, ResponseStatus } from '~/types/common.types'

class ResponseError extends Error {
  code?: number
  status?: ResponseStatus

  constructor({ code, message, status }: Partial<ErrorResponse>) {
    super(message)

    this.code = code
    this.status = status
  }
}

export { ResponseError }
