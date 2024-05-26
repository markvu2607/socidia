import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

type Props = {};

export const Stories = async (props: Props) => {
  const user = await currentUser();

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={user.imageUrl}
            alt="create stories"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span>Add</span>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <Image
              src={user.imageUrl}
              alt="create stories"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2"
            />
            <span>Add</span>
          </div>
        ))}
      </div>
    </div>
  );
};
