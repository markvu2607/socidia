import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  userId: string;
};

export const UserMediaCard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "p-4 bg-white rounded-lg shadow-md text-sm"
      )}
    >
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-20">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};
