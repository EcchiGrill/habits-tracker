import { ButtonProps as MUIButtonProps } from "@mui/material/Button";

export type ButtonPropsWithoutVariant = Omit<MUIButtonProps, "variant">;
