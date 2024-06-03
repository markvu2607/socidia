import Image from "next/image";

import { CheckBadgeIcon } from "@/feat/common/components/icons";
import { cn } from "@/lib/utils";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

type Props = {};

export const ProfileCard = async (props: Props) => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        "p-4 bg-white rounded-lg shadow-md text-sm text-gray-500"
      )}
    >
      <div className="h-20 relative">
        <Image
          src={user.cover || "/noCover.png"}
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src={user.avatar || "/default-avatar.jpg"}
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">
          {user.name && user.surname
            ? `${user.name} ${user.surname}`
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="size-6" />
            <span>{user._count.followers} followers</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My profile
        </button>
      </div>
    </div>
  );
};
