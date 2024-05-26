import Image from "next/image";

import {
  CommentIcon,
  LikeIcon,
  MoreIcon,
  ShareIcon,
} from "@/feat/common/components/icons";

type Props = {};

export const Post = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Mark</span>
        </div>
        <MoreIcon className="size-6" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          debitis amet sapiente soluta quaerat alias totam odio inventore quasi
          maiores animi error saepe, placeat possimus nihil temporibus eos
          accusamus! Perferendis?
        </p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
            <LikeIcon className="size-4" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
            <CommentIcon className="size-4" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">456</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
            <ShareIcon className="size-4" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">456</span>
          </div>
        </div>
      </div>
    </div>
  );
};
