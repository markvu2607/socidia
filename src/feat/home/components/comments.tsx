import { EmojiIcon, LikeIcon, MoreIcon } from "@/feat/common/components/icons";
import { CommentList } from "@/feat/home/components/comment-list";
import prisma from "@/lib/prisma";
import Image from "next/image";

type Props = {
  postId: number;
};

export const Comments = async ({ postId }: Props) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });

  return (
    <div>
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};
