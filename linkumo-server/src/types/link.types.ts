import { Link as PrismaLink } from '@prisma/client'

export type Link = Pick<PrismaLink, 'url' | 'title' | 'tags' | 'isFavorite'>
