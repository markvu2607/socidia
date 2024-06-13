import { StoryList } from "@/feat/home/components/story-list";
import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

type Props = {};

export const Stories = async (props: Props) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <StoryList stories={stories} userId={currentUserId} />
      </div>
    </div>
  );
};
