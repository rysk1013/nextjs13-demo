// Prismaのインスタンスをこのglobals/db.ts経由で取得することで、警告を回避

import { PrismaClient } from '@prisma/client';
// Prismaはサーバーサイドでしか使用できないためserver-onlyをインポートする
import 'server-only';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
