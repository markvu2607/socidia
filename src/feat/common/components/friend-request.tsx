import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { CheckCircleIcon, XCircleIcon } from "@/feat/common/components/icons";

type Props = {};

export const FriendRequest = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "p-4 bg-white rounded-lg shadow-md text-sm"
      )}
    >
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Mark</span>
        </div>
        <div className="flex gap-3 justify-end">
          <CheckCircleIcon className="size-4" />
          <XCircleIcon className="size-4" />
        </div>
      </div>
    </div>
  );
};
