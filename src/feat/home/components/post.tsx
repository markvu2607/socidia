import Image from "next/image";
import { Post as TPost, User } from "@prisma/client";

import {
  CommentIcon,
  LikeIcon,
  MoreIcon,
  ShareIcon,
} from "@/feat/common/components/icons";
import { Comments } from "@/feat/home/components/comments";

type Props = {
  post: TPost & { user: User } & {
    likes: [{ userId: string }];
  } & {
    _count: { comments: number };
  };
};

export const Post = ({ post }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "default-avatar.jpg"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? `${post.user.name} ${post.user.surname}`
              : post.user.username}
          </span>
        </div>
        <MoreIcon className="size-6" />
      </div>
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
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
            <span className="text-gray-500">Share</span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};
