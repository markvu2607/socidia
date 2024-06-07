"use client";

import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

import { CheckCircleIcon, XCircleIcon } from "@/feat/common/components/icons";
import {
  acceptFollowRequest,
  declineFollowRequest,
} from "@/feat/profile/actions";

type Props = {
  requests: (FollowRequest & {
    sender: User;
  })[];
};

export const FriendRequestList = ({ requests }: Props) => {
  const [requestState, setRequestState] = useState(requests);

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {}
  };

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {}
  };

  return (
    <div>
      {optimisticRequests.map((request) => (
        <div key={request.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/default-avatar.jpg"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? `${request.sender.name} ${request.sender.surname}`
                : request.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <CheckCircleIcon className="size-4" />
              </button>
            </form>
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <XCircleIcon className="size-4" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};
