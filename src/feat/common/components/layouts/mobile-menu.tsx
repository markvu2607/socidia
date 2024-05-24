"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export const MobileMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={cn(
            "w-6 h-1",
            "bg-blue-500 rounded-sm",
            "origin-left ease-in-out duration-500",
            {
              "rotate-45": isOpen,
            }
          )}
        />
        <div
          className={cn(
            "w-6 h-1",
            "bg-blue-500 rounded-sm",
            "origin-left ease-in-out duration-500",
            {
              "opacity-0": isOpen,
            }
          )}
        />
        <div
          className={cn(
            "w-6 h-1",
            "bg-blue-500 rounded-sm",
            "origin-left ease-in-out duration-500",
            {
              "-rotate-45": isOpen,
            }
          )}
        />
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute left-0 top-24 z-10",
            "w-full h-[calc(100vh-96px)]",
            "flex flex-col items-center justify-center gap-8",
            "bg-white font-medium text-xl"
          )}
        >
          <Link href="/">Home</Link>
          <Link href="#">Friends</Link>
          <Link href="#">Groups</Link>
          <Link href="#">Stories</Link>
          <Link href="#">Login</Link>
        </div>
      )}
    </div>
  );
};
