import { FC } from "react";
import { styled } from "@mui/material/styles";
import MUILink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "./types";
import { StyledLinkProps } from "./types";

const StyledLink = styled(MUILink, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<StyledLinkProps>(({ isActive }) => ({
  color: "#5245de",
  background: isActive ? "rgba(82, 69, 222, 0.1)" : "transparent",
  textDecoration: "none",
  padding: "8px 18px",
  borderRadius: "2px",
  "&:hover": {
    background: "rgba(82, 69, 222, 0.1)",
  },
}));

export const Link: FC<LinkProps> = ({ to, children, isActive = false }) => {
  return (
    <StyledLink component={RouterLink} to={to} isActive={isActive}>
      {children}
    </StyledLink>
  );
};
