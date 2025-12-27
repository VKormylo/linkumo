import { Request, Response } from 'express'

import { prisma } from '~/lib/prisma'

import { catchAsync } from '~/utils/catchAsync'

export const getUsers = catchAsync(async (_: Request, res: Response) => {
  const users = await prisma.user.findMany()

  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  })
})
