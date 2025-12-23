import { prisma } from '~/lib/prisma'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import { Link } from '~/types/link.types'
import errors from '~/constants/errors'

export const getAll = async (userId: string) => {
  const links = await prisma.link.findMany({
    where: {
      userId
    }
  })

  return links
}

export const getOne = async (userId: string, id: string) => {
  const link = await prisma.link.findUnique({
    where: {
      id,
      userId
    }
  })

  if (!link) {
    throw new ErrorResponse(errors.LINK_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  return link
}

export const create = async (userId: string, payload: Link) => {
  const link = await prisma.link.create({
    data: {
      ...payload,
      userId
    }
  })

  return link
}

export const update = async (userId: string, id: string, payload: Link) => {
  const existingLink = await prisma.link.findUnique({
    where: {
      id,
      userId
    }
  })

  if (!existingLink) {
    throw new ErrorResponse(errors.LINK_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  const link = await prisma.link.update({
    where: {
      id,
      userId
    },
    data: payload
  })

  return link
}

export const deleteById = async (userId: string, id: string) => {
  const existingLink = await prisma.link.findUnique({
    where: {
      id,
      userId
    }
  })

  if (!existingLink) {
    throw new ErrorResponse(errors.LINK_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  await prisma.link.delete({
    where: {
      id,
      userId
    }
  })
}
