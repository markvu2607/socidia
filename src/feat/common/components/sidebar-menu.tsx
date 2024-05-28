import Link from "next/link";

import {
  BuildingStorefrontIcon,
  CalendarIcon,
  PencilSquareIcon,
  PresentationChartBarIcon,
} from "@/feat/common/components/icons";
import { cn } from "@/lib/utils";

type Props = {};

export const SidebarMenu = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        "p-4 bg-white rounded-lg shadow-md text-sm text-gray-500"
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <PencilSquareIcon className="size-6" />
        <span>My posts</span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <PresentationChartBarIcon className="size-6" />
        <span>Activity</span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <BuildingStorefrontIcon className="size-6" />
        <span>Marketplace</span>
      </Link>
      <Link
        href="/"
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <CalendarIcon className="size-6" />
        <span>Events</span>
      </Link>
      <hr className="border-t-1 border-gray-50 w-36 self-center" />
    </div>
  );
};
