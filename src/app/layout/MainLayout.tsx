import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useUserStore } from "@entities/user";
import { Header } from "@widgets/Header";
import { createPortal } from "react-dom";
import { LoginModal } from "@features/LoginModal";

export const MainLayout: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBlock: "6rem",
        }}
      >
        <Outlet />
        {!user &&
          createPortal(
            <LoginModal />,
            document.getElementById("root") as HTMLElement
          )}
      </main>
    </>
  );
};
