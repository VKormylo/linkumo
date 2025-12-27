import { NextFunction, Request, RequestHandler, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const catchAsync = (fn: (req: any, res: Response, next: NextFunction) => Promise<void>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}
