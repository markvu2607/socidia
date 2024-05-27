import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const RightMenu = ({ children }: Props) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};
