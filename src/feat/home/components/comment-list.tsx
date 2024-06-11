"use client";

import { EmojiIcon, LikeIcon, MoreIcon } from "@/feat/common/components/icons";
import { addComment } from "@/feat/home/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

type Props = {
  postId: number;
  comments: CommentWithUser[];
};

export const CommentList = ({ postId, comments }: Props) => {
  const { user } = useUser();
  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");

  const [optimisticComments, addOptimisticComments] = useOptimistic(
    commentState,
    (state, value: CommentWithUser) => {
      return [value, ...state];
    }
  );

  const add = async () => {
    if (!user || !desc) return;

    addOptimisticComments({
      id: Math.random(),
      desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId,
      user: {
        id: user.id,
        username: "Sending...",
        avatar: user.imageUrl || "default-avatar.jpg",
        cover: "",
        description: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdComment = await addComment(postId, desc);
      setCommentState((prev) => [createdComment, ...prev]);
    } catch (error) {}
  };

  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user?.imageUrl || "default-avatar.jpg"}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
            <form action={add}>
              <input
                type="text"
                placeholder="Write a comment..."
                className="bg-transparent outline-none flex-1"
                onChange={(e) => setDesc(e.target.value)}
              />
            </form>
            <EmojiIcon className="size-6" />
          </div>
        </div>
      )}
      <div>
        {optimisticComments.map((comment) => (
          <div key={comment.id} className="flex gap-4 justify-between mt-6">
            <Image
              src={comment.user.avatar || "default-avatar.jpg"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">
                {comment.user.name && comment.user.surname
                  ? `${comment.user.name} ${comment.user.surname}`
                  : comment.user.username}
              </span>
              <p>{comment.desc}</p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-2">
                  <LikeIcon className="size-4" />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">123</span>
                </div>
                <div>Reply</div>
              </div>
            </div>
            <MoreIcon className="size-6" />
          </div>
        ))}
      </div>
    </>
  );
};
