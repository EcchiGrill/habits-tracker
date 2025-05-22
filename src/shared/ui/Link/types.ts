import { Link } from "react-router-dom";

export interface LinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export interface StyledLinkProps {
  component?: typeof Link;
  to?: string;
  isActive: boolean;
}
