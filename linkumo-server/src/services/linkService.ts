import { prisma } from '~/lib/prisma'

import errors from '~/constants/errors'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'
import { Link } from '~/types/link.types'

import { findOrCreateTags } from './tagService'

export const getAll = async (userId: string) => {
  const links = await prisma.link.findMany({
    where: {
      userId
    },
    include: {
      tags: true
    }
  })

  return links
}

export const getOne = async (userId: string, id: string) => {
  const link = await prisma.link.findUnique({
    where: {
      id,
      userId
    },
    include: {
      tags: true
    }
  })

  if (!link) {
    throw new ErrorResponse(errors.LINK_NOT_FOUND, ErrorStatusCode.NOT_FOUND)
  }

  return link
}

export const create = async (userId: string, payload: Link) => {
  const { tags: tagNames, ...linkData } = payload

  const tags = await findOrCreateTags(userId, tagNames)

  const link = await prisma.link.create({
    data: {
      ...linkData,
      userId,
      tags: {
        connect: tags.map((tag) => ({ id: tag.id }))
      }
    },
    include: {
      tags: true
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

  const { tags: tagNames, ...linkData } = payload

  const updateData: Parameters<typeof prisma.link.update>[0]['data'] = {
    ...linkData
  }

  if (tagNames !== undefined) {
    const tags = await findOrCreateTags(userId, tagNames)
    updateData.tags = {
      set: tags.map((tag) => ({ id: tag.id }))
    }
  }

  const link = await prisma.link.update({
    where: {
      id,
      userId
    },
    data: updateData,
    include: {
      tags: true
    }
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
