import { Request } from 'express'

export interface ProtectedRequest<T = unknown> extends Request {
  body: T
  userId: string
}
