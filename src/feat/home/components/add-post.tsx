import {
  CalendarIcon,
  EmojiIcon,
  PhotoIcon,
  PlayIcon,
  PollIcon,
} from "@/feat/common/components/icons";
import Image from "next/image";
import React from "react";

type Props = {};

export const AddPost = (props: Props) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="https://images.unsplash.com/photo-1724232547374-69758574fff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <div className="flex gap-4 ">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-e-lg flex-1 p-2"
          ></textarea>
          <EmojiIcon className="size-6 self-end" />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2">
            <PhotoIcon className="size-6" />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2">
            <PlayIcon className="size-6" />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2">
            <PollIcon className="size-6" />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-6" />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};
