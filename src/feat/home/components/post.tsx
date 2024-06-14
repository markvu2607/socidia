import { Post as TPost, User } from "@prisma/client";
import Image from "next/image";

import { MoreIcon } from "@/feat/common/components/icons";
import { Comments } from "@/feat/home/components/comments";
import { PostActions } from "@/feat/home/components/post-actions";
import { Suspense } from "react";
import { PostInfo } from "@/feat/home/components/post-info";
import { auth } from "@clerk/nextjs/server";

type Props = {
  post: TPost & { user: User } & {
    likes: [{ userId: string }];
  } & {
    _count: { comments: number };
  };
};

export const Post = ({ post }: Props) => {
  const { userId } = auth();

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
        {userId === post.user.id && <PostInfo postId={post.id} />}
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
      <Suspense fallback="Loading...">
        <PostActions
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        />
      </Suspense>
      <Suspense fallback="Loading...">
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};
