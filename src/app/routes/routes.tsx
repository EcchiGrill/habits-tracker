import { MainLayout } from "@app/layout/MainLayout";
import { ActiveHabits } from "@pages/ActiveHabits";
import { ArchivedHabits } from "@pages/ArchivedHabits";
import { NotFound } from "@pages/NotFound";
import { Navigate, Route } from "react-router-dom";

export const routesList = [
  {
    path: "/active/:pageNumber?",
    element: ActiveHabits,
    name: "Active",
  },
  {
    path: "/archived/:pageNumber?",
    element: ArchivedHabits,
    name: "Archived",
  },
];

export const routes = (
  <>
    <Route element={<MainLayout />}>
      {routesList.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="/" element={<Navigate to="/active" replace={true} />} />
  </>
);
