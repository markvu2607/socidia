"use client";

import { addStory } from "@/feat/home/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & { user: User };

type Props = {
  stories: StoryWithUser[];
  userId: string;
};

export const StoryList = ({ stories, userId }: Props) => {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>();

  const { user } = useUser();

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => {
      return [value, ...state];
    }
  );

  const add = async () => {
    if (!img?.secure_url) return;

    addOptimisticStory({
      id: Math.random(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: user?.imageUrl || "default-avatar.jpg",
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
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImg(null);
    } catch (error) {}
  };

  return (
    <>
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
              className="flex flex-col items-center gap-2 cursor-pointer relative"
              onClick={() => open()}
            >
              <Image
                src={img?.secure_url || user?.imageUrl || "/default-avatar.jpg"}
                alt="create stories"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2 object-cover"
                onClick={() => open()}
              />
              {img ? (
                <form action={add}>
                  <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a story</span>
              )}
              <div className="absolute text-6xl text-gray-200 top-1">+</div>
            </div>
          );
        }}
      </CldUploadWidget>
      {optimisticStories.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={story.user.avatar || "/default-avatar.jpg"}
            alt="create stories"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span>{story.user.name || story.user.username}</span>
        </div>
      ))}
    </>
  );
};
