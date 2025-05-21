import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import "./styles/global.css";
import { NotificationProvider } from "./providers/NotificationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </StrictMode>
);
