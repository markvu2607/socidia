import Image from "next/image";

import { CheckBadgeIcon } from "@/feat/common/components/icons";
import { cn } from "@/lib/utils";

type Props = {};

export const ProfileCard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        "p-4 bg-white rounded-lg shadow-md text-sm text-gray-500"
      )}
    >
      <div className="h-20 relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt=""
          fill
          className="rounded-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1724232547374-69758574fff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">Mark</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CheckBadgeIcon className="size-6" />
            <span>500 followers</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My profile
        </button>
      </div>
    </div>
  );
};
