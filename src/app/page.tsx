import { AddPost } from "@/feat/home/components/add-post";
import { Feed } from "@/feat/home/components/feed";
import { RightMenu } from "@/feat/common/components/right-menu";
import { Stories } from "@/feat/home/components/stories";
import { FriendRequest } from "@/feat/common/components/friend-request";
import { Birthdays } from "@/feat/common/components/birthdays";
import { Ad } from "@/feat/common/components/ad";
import { LeftMenu } from "@/feat/common/components/left-menu";
import { ProfileCard } from "@/feat/home/components/profile-card";
import { SidebarMenu } from "@/feat/common/components/sidebar-menu";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu>
          <ProfileCard />
          <SidebarMenu />
          <Ad size="sm" />
        </LeftMenu>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu>
          <FriendRequest />
          <Birthdays />
          <Ad size="md" />
        </RightMenu>
      </div>
    </div>
  );
};

export default Homepage;
