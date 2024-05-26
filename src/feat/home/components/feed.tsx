import { Post } from "@/feat/home/components/post";
import React from "react";

type Props = {};

export const Feed = (props: Props) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
