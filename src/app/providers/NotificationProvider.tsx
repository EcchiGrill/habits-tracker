import { FC, PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
