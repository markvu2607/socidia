import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

import { FriendRequestList } from "@/feat/common/components/friend-request-list";
import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";

type Props = {};

export const FriendRequest = async (props: Props) => {
  const { userId } = auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "p-4 bg-white rounded-lg shadow-md text-sm"
      )}
    >
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <FriendRequestList requests={requests} />
    </div>
  );
};
