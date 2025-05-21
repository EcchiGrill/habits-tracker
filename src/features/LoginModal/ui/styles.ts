import { styled } from "@mui/material/styles";
import MUIBox, { BoxProps as MUIBoxProps } from "@mui/material/Box";

export const StyledModal = styled(MUIBox)<MUIBoxProps>(() => ({
  maxWidth: "50rem",
  height: "25rem",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f8f9fa",
  borderRadius: "0.2rem",
  boxShadow: "0 0 10px rgba(12, 11, 11, 0.1)",
  gap: "5rem",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "4rem",
  zIndex: 10,
}));

export const StyledBg = styled(MUIBox)<MUIBoxProps>(() => ({
  height: "100vh",
  width: "100vw",
  top: 0,
  zIndex: 5,
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));
