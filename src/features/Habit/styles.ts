import { styled } from "@mui/material/styles";
import MUIBox, { BoxProps as MUIBoxProps } from "@mui/material/Box";
import { Input } from "@mui/material";

export const StyledBox = styled(MUIBox)<MUIBoxProps>(() => ({
  borderRadius: "0.2rem",
  backgroundColor: "#f8f9fa",
  boxShadow: "0 0 10px rgba(12, 11, 11, 0.1)",
  padding: "2rem",
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledInput = styled(Input)<{ checked: boolean }>(
  ({ checked }) => ({
    "& .MuiInput-input": {
      textDecoration: checked ? "line-through" : "none",
      color: checked ? "gray" : "inherit",
    },
  })
);
