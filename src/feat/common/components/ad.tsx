import Image from "next/image";

import { MoreIcon } from "@/feat/common/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  size: "sm" | "md" | "lg";
};

export const Ad = ({ size }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "p-4 bg-white rounded-lg shadow-md text-sm"
      )}
    >
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <MoreIcon className="size-4" />
      </div>
      <div
        className={cn("flex flex-col mt-4", size === "sm" ? "gap-2" : "gap-4")}
      >
        <div
          className={cn(
            "relative w-full",
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          )}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Mark</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis cumque esse iste odio temporibus animi nemo eum maxime."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis cumque esse iste odio temporibus animi nemo eum maxime quaerat facere, vero ea. Odio maiores maxime quos nam, numquam dolorem?"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};
