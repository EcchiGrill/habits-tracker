import { BrowserRouter, Routes } from "react-router-dom";
import { FC } from "react";
import { routes } from "@app/routes";

export const RouterProvider: FC = () => {
  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
};
