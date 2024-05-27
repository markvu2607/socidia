import { EmojiIcon, LikeIcon, MoreIcon } from "@/feat/common/components/icons";
import Image from "next/image";

type Props = {};

export const Comments = (props: Props) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <EmojiIcon className="size-6" />
        </div>
      </div>
      <div>
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Mark</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium neque cumque dolorum suscipit. Facilis debitis
              deleniti, temporibus delectus impedit repellat officiis ducimus
              expedita velit nobis animi autem necessitatibus atque corporis!
            </p>
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
      </div>
    </div>
  );
};
