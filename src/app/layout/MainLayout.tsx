import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@widgets/Header";

export const MainLayout: FC = () => {
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
      </main>
    </>
  );
};
