import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAll: privateProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({
      take: 100,
      orderBy: [
        { createdAt: 'desc' }
      ]
    });

    return products;
  }),
});
