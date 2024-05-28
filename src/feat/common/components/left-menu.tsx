import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const LeftMenu = ({ children }: Props) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};
