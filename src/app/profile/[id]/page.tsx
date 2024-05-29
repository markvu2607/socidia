import Image from "next/image";

import { Ad } from "@/feat/common/components/ad";
import { Birthdays } from "@/feat/common/components/birthdays";
import { FriendRequest } from "@/feat/common/components/friend-request";
import { RightMenu } from "@/feat/common/components/right-menu";
import { Feed } from "@/feat/home/components/feed";
import { LeftMenu } from "@/feat/common/components/left-menu";
import { UserInformationCard } from "@/feat/profile/components/user-information-card";
import { UserMediaCard } from "@/feat/profile/components/user-media-card";
import { SidebarMenu } from "@/feat/common/components/sidebar-menu";

type Props = {};

const ProfilePage = (props: Props) => {
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
                src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt=""
                fill
                className=" rounded-md object-cover"
              />
              <Image
                src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Mark</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm">123</span>
                <span className="text-sm">posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm">1.2k</span>
                <span className="text-sm">followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm">123k</span>
                <span className="text-sm">following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu>
          <UserInformationCard userId="test" />
          <UserMediaCard userId="test" />
          <FriendRequest />
          <Birthdays />
          <Ad size="md" />
        </RightMenu>
      </div>
    </div>
  );
};

export default ProfilePage;
