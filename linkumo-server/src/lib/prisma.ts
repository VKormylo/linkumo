import { PrismaClient } from '@prisma/client'
import config from '~/configs'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn']
  })

if (config.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
