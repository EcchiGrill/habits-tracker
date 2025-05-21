import { MainLayout } from "@app/layout/MainLayout";
import { ActiveHabits } from "@pages/ActiveHabits";
import { ArchivedHabits } from "@pages/ArchivedHabits";
import { Route } from "react-router-dom";

export const routesList = [
  {
    path: "/",
    element: ActiveHabits,
    name: "Active",
  },
  {
    path: "/archived",
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
    </Route>
  </>
);
