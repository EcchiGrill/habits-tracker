import { styled } from "@mui/material/styles";
import MUIBox, { BoxProps as MUIBoxProps } from "@mui/material/Box";

export const StyledWrapperBox = styled(MUIBox)<MUIBoxProps>(() => ({
  minWidth: "50rem",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f8f9fa",
  borderRadius: "0.2rem",
  boxShadow: "0 0 10px rgba(12, 11, 11, 0.1)",
  gap: "4rem",
  padding: "4rem",
}));
