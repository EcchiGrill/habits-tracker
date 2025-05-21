import { FC } from "react";
import { RouterProvider } from "./providers/RouterProvider";
import { NotificationProvider } from "./providers/NotificationProvider";

const App: FC = () => {
  return (
    <NotificationProvider>
      <RouterProvider />
    </NotificationProvider>
  );
};

export default App;
