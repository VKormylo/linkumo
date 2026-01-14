import { prisma } from '~/lib/prisma'

import errors from '~/constants/errors'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'

export const findOrCreateTags = async (userId: string, tagNames: string[] = []) => {
  if (tagNames.length === 0) {
    return []
  }

  const tags = await Promise.all(
    tagNames.map(async (name) => {
      const tag = await prisma.tag.upsert({
        where: {
          name_userId: {
            name,
            userId
          }
        },
        update: {},
        create: {
          name,
          userId
        }
      })
      return tag
    })
  )

  return tags
}

export const getAll = async (userId: string) => {
  const tags = await prisma.tag.findMany({
    where: {
      userId
    },
    orderBy: {
      name: 'asc'
    }
  })

  return tags
}

export const getOne = async (userId: string, id: string) => {
  const tag = await prisma.tag.findUnique({
    where: {
      id,
      userId
    }
  })

  if (!tag) {
    throw new ErrorResponse(errors.TAG_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  return tag
}

export const create = async (userId: string, name: string) => {
  const tag = await prisma.tag.create({
    data: {
      name,
      userId
    }
  })

  return tag
}

export const update = async (userId: string, id: string, name: string) => {
  const existingTag = await prisma.tag.findUnique({
    where: {
      id,
      userId
    }
  })

  if (!existingTag) {
    throw new ErrorResponse(errors.TAG_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  const tag = await prisma.tag.update({
    where: {
      id,
      userId
    },
    data: {
      name
    }
  })

  return tag
}

export const deleteById = async (userId: string, id: string) => {
  const existingTag = await prisma.tag.findUnique({
    where: {
      id,
      userId
    }
  })

  if (!existingTag) {
    throw new ErrorResponse(errors.TAG_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  await prisma.tag.delete({
    where: {
      id,
      userId
    }
  })
}
