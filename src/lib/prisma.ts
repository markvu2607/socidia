import { Prisma, PrismaClient } from "@prisma/client";

const globalPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalPrisma.prisma || new PrismaClient();
export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalPrisma.prisma = prisma;
}
