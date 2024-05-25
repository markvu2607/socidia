import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

import {
  BellIcon,
  ChatIcon,
  GroupIcon,
  HomeIcon,
  PlusCircleIcon,
  SearchIcon,
  UserCircleIcon,
} from "@/feat/common/components/icons";
import { cn } from "@/lib/utils";
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
      <div className="hidden md:flex w-1/2 text-sm items-center justify-between">
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
      <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
        <input
          type="text"
          placeholder="search..."
          className="bg-transparent outline-none"
        />
        <SearchIcon className="size-6" />
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className={cn(
              "w-8 h-8",
              "inline-block",
              "rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface dark:text-white",
              "animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]"
            )}
            role="status"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <GroupIcon className="size-6" />
            <ChatIcon className="size-6" />
            <BellIcon className="size-6" />
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <UserCircleIcon className="size-6" />
              <Link href="/sign-in">Login</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};
