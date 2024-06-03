import React from "react";

type Props = {
  userId: string;
  currentUserId: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};

const UserInformationActions = ({
  currentUserId,
  isFollowing,
  isFollowingSent,
  isUserBlocked,
  userId,
}: Props) => {
  return (
    <>
      <form action="">
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 text-xs cursor-pointer">
          {isUserBlocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInformationActions;
