import Link from "next/link";
import React from "react";

import { MobileMenu } from "./mobile-menu";

type Props = {};

export const NavBar = (props: Props) => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div>
        <Link href="/" className="font-bold text-xl text-blue-500">
          Socidia
        </Link>
      </div>
      <div className="hidden"></div>
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};
