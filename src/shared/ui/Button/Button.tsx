import MUIButton from "@mui/material/Button";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { styled } from "@mui/system";
import { FC } from "react";
import { ButtonPropsWithoutVariant } from "./types";

const BaseButton = styled(MUIButton)<MUIButtonProps>(({ size }) => ({
  borderRadius: "8px",
  fontWeight: "500",
  textTransform: "none",
  boxShadow: "none",

  "&:hover": {
    boxShadow: "none",
  },

  ...(size === "small" && {
    fontSize: "13px",
    lineHeight: "22px",
    letterSpacing: "0.46px",
  }),

  ...(size === "medium" && {
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.4px",
  }),

  ...(size === "large" && {
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "0.46px",
  }),
}));

export const Button: FC<ButtonPropsWithoutVariant> = (props) => {
  return <BaseButton variant="contained" {...props} />;
};
