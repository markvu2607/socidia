"use client";

import { useState } from "react";

import { MoreIcon } from "@/feat/common/components/icons";
import { deletePost } from "@/feat/home/actions";

type Props = {
  postId: number;
};

export const PostInfo = ({ postId }: Props) => {
  const [open, setOpen] = useState(false);

  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <div className="relative">
      <MoreIcon
        className="size-6 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};
