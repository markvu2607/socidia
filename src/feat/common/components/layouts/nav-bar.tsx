import Link from "next/link";

import {
  GroupIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@/feat/common/components/icons";
import { MobileMenu } from "./mobile-menu";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-1/5">
        <Link href="/" className="font-bold text-xl text-blue-500">
          Socidia
        </Link>
      </div>
      <div className="hidden md:flex w-1/2 text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2">
            <HomeIcon className="size-6" />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex gap-2">
            <GroupIcon className="size-6" />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex gap-2">
            <PlusCircleIcon className="size-6" />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};
