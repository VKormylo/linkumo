import { NextFunction, Response } from 'express'

import errors from '~/constants/errors'
import { type ProtectedRequest } from '~/types/api.types'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import { type TagPayload } from '~/types/tag.types'

import { catchAsync } from '~/utils/catchAsync'

import * as tagService from '~/services/tagService'

export const getTags = catchAsync(async (req: ProtectedRequest, res: Response) => {
  const userId = req.userId
  const tags = await tagService.getAll(userId)

  res.status(200).json({
    status: 'success',
    data: {
      tags
    }
  })
})

export const getTag = catchAsync(async (req: ProtectedRequest, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { id } = req.params

  if (!id) {
    return next(new ErrorResponse(errors.TAG_ID_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  const tag = await tagService.getOne(userId, id)

  res.status(200).json({
    status: 'success',
    data: {
      tag
    }
  })
})

export const createTag = catchAsync(async (req: ProtectedRequest<TagPayload>, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { name } = req.body

  if (!name) {
    return next(new ErrorResponse(errors.TAG_NAME_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  const tag = await tagService.create(userId, name)

  res.status(201).json({
    status: 'success',
    data: {
      tag
    }
  })
})

export const updateTag = catchAsync(async (req: ProtectedRequest<TagPayload>, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { id } = req.params
  const { name } = req.body

  if (!id) {
    return next(new ErrorResponse(errors.TAG_ID_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  if (!name) {
    return next(new ErrorResponse(errors.TAG_NAME_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  const tag = await tagService.update(userId, id, name)

  res.status(200).json({
    status: 'success',
    data: {
      tag
    }
  })
})

export const deleteTag = catchAsync(async (req: ProtectedRequest, res: Response, next: NextFunction) => {
  const userId = req.userId
  const { id } = req.params

  if (!id) {
    return next(new ErrorResponse(errors.TAG_ID_REQUIRED, ErrorStatusCode.BAD_REQUEST))
  }

  await tagService.deleteById(userId, id)

  res.status(200).json({
    status: 'success',
    data: null
  })
})
