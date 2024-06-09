import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Ad } from "@/feat/common/components/ad";
import { Birthdays } from "@/feat/common/components/birthdays";
import { FriendRequest } from "@/feat/common/components/friend-request";
import { LeftMenu } from "@/feat/common/components/left-menu";
import { RightMenu } from "@/feat/common/components/right-menu";
import { SidebarMenu } from "@/feat/common/components/sidebar-menu";
import { Feed } from "@/feat/home/components/feed";
import { UserInformationCard } from "@/feat/profile/components/user-information-card";
import { UserMediaCard } from "@/feat/profile/components/user-media-card";
import prisma from "@/lib/prisma";

type Props = {
  params: {
    username: string;
  };
};

const ProfilePage = async ({ params }: Props) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: { select: { followers: true, following: true, posts: true } },
    },
  });

  if (!user) notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if (res) isBlocked = true;
  }

  if (isBlocked) notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu>
          <SidebarMenu />
          <Ad size="sm" />
        </LeftMenu>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noCover.png"}
                alt=""
                fill
                className=" rounded-md object-cover"
              />
              <Image
                src={user.avatar || "/default-avatar.jpg"}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? `${user.name} ${user.surname}`
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm">{user._count.posts}</span>
                <span className="text-sm">posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm">
                  {user._count.followers}
                </span>
                <span className="text-sm">followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm">
                  {user._count.following}
                </span>
                <span className="text-sm">following</span>
              </div>
            </div>
          </div>
          <Feed username={user.username} />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu>
          {user ? (
            <>
              <Suspense fallback="loading...">
                <UserInformationCard user={user} />
              </Suspense>
              <Suspense fallback="loading...">
                <UserMediaCard user={user} />
              </Suspense>
            </>
          ) : null}
          <FriendRequest />
          <Birthdays />
          <Ad size="md" />
        </RightMenu>
      </div>
    </div>
  );
};

export default ProfilePage;
