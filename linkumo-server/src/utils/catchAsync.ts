import { NextFunction, Request, RequestHandler, Response } from 'express'

export const catchAsync = (fn: (req: any, res: Response, next: NextFunction) => Promise<void>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}
