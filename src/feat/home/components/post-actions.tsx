"use client";

import {
  CommentIcon,
  LikedIcon,
  LikeIcon,
  ShareIcon,
} from "@/feat/common/components/icons";
import { switchLike } from "@/feat/home/actions";
import { useAuth } from "@clerk/nextjs";
import React, { useOptimistic, useState } from "react";

type Props = {
  postId: number;
  likes: string[];
  commentNumber: number;
};

export const PostActions = ({ postId, likes, commentNumber }: Props) => {
  const { isLoaded, userId } = useAuth();

  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (err) {}
  };

  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex gap-8">
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
          <form action={likeAction} className="flex items-center">
            <button>
              {optimisticLike.isLiked ? (
                <LikedIcon className="size-4" />
              ) : (
                <LikeIcon className="size-4" />
              )}
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">{optimisticLike.likeCount}</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full">
          <CommentIcon className="size-4" />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">{commentNumber}</span>
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
  );
};
