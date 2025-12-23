import { NextFunction, Response } from 'express'
import { catchAsync } from '~/utils/catchAsync'
import { type ProtectedRequest } from '~/types/api.types'
import { type Link } from '~/types/link.types'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import errors from '~/constants/errors'

import * as linkService from '~/services/linkService'

export const getLinks = catchAsync(async (req: ProtectedRequest, res: Response) => {
  const userId = req.userId
  const links = await linkService.getAll(userId)

  res.status(200).json({
    status: 'success',
    data: {
      links
    }
  })
})

export const getLink = catchAsync(async (req: ProtectedRequest, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { id } = req.params

  if (!id) {
    return next(new ErrorResponse(errors.LINK_ID_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  const link = await linkService.getOne(userId, id)

  res.status(200).json({
    status: 'success',
    data: {
      link
    }
  })
})

export const createLink = catchAsync(async (req: ProtectedRequest<Link>, res: Response) => {
  const userId = req.userId

  const link = await linkService.create(userId, req.body)

  res.status(201).json({
    status: 'success',
    data: {
      link
    }
  })
})

export const updateLink = catchAsync(async (req: ProtectedRequest<Link>, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { id } = req.params

  if (!id) {
    return next(new ErrorResponse(errors.LINK_ID_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  const link = await linkService.update(userId, id, req.body)

  res.status(200).json({
    status: 'success',
    data: {
      link
    }
  })
})

export const deleteLink = catchAsync(async (req: ProtectedRequest, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { id } = req.params

  if (!id) {
    return next(new ErrorResponse(errors.LINK_ID_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  await linkService.deleteById(userId, id)

  res.status(200).json({
    status: 'success',
    data: null
  })
})
