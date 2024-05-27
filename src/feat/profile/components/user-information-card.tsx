import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  LinkIcon,
  MapPinIcon,
} from "@/feat/common/components/icons";

type Props = {
  userId: string;
};

export const UserInformationCard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "p-4 bg-white rounded-lg shadow-md text-sm"
      )}
    >
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Mark</span>
          <span className="text-sm">@markvu2607</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
          voluptas quod ducimus molestiae eaque modi veniam nihil soluta, odit
          nesciunt velit voluptatum alias autem numquam cupiditate vero dolore!
          Eum, est?
        </p>
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-6" />
          <span>
            Living in <b>Vietnam</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <AcademicCapIcon className="size-6" />
          <span>
            Went to <b>TLU</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BuildingOfficeIcon className="size-6" />
          <span>
            Working at <b>Test</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <LinkIcon className="size-6" />
            <Link
              href="https://markvu.tech"
              className="text-blue-500 font-medium"
            >
              markvu.tech
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <CalendarIcon className="size-6" />
            <span>Joined Jan 2025</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};
