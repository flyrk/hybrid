// server/api/routers/tasks.ts
import { clerkClient } from "@clerk/nextjs/server";
import type { User } from '@clerk/nextjs/dist/api';
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import axios from "axios";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl
  };
};

export const tasksRouter = createTRPCRouter({
  getAll: privateProcedure.query(async ({ ctx }) => {
    const tasks = await ctx.prisma.task.findMany({
      take: 100,
      orderBy: [
        { createdAt: 'desc' }
      ]
    });

    const oriUsers = await clerkClient.users.getUserList({
      userId: tasks.map((task) => task.authorId),
      limit: 100,
    });

    const users = oriUsers?.map(filterUserForClient)

    return tasks.map((task) => ({
      task,
      author: users.find((user) => user.id === task.authorId)
    }));
  }),

  create: privateProcedure
    .input(
      z.object({
        name: z.string().min(1).max(64),
        url: z.string()
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;
      // 获取网页内容
      const response = await axios.get(input.url);
      console.log("🚀 ~ file: tasks.ts:35 ~ .mutation ~ response:", response)

      // 在这里处理网页内容，例如提取特定信息或解析HTML结构
      const task = await ctx.prisma.task.create({
        data: {
          name: input.name,
          url: input.url,
          authorId,
        }
      });
      return task;
    }),
});
