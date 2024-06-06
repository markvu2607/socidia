import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";

type Props = {
  user: User;
};

export const UserMediaCard = async ({ user }: Props) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "p-4 bg-white rounded-lg shadow-md text-sm"
      )}
    >
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div key={post.id} className="relative w-1/5 h-20">
                <Image
                  src={post.img!}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            ))
          : "No media found!"}
      </div>
    </div>
  );
};
