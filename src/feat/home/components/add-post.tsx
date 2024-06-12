"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

import {
  CalendarIcon,
  EmojiIcon,
  PhotoIcon,
  PlayIcon,
  PollIcon,
} from "@/feat/common/components/icons";
import { AddPostButton } from "@/feat/home/components/add-post-button";
import { addPost } from "@/feat/home/actions";

type Props = {};

export const AddPost = (props: Props) => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading ...";
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "default-avatar.jpg"}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            name="desc"
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-e-lg flex-1 p-2"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div>
            <EmojiIcon className="size-6 self-end" />
            <AddPostButton />
          </div>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="socidia"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <PhotoIcon className="size-6" />
                  <span>Photo</span>
                </div>
              );
            }}
          </CldUploadWidget>
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
