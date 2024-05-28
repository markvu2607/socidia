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
