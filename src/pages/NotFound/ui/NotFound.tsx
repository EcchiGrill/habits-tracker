import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "1.3rem", color: "red" }}>
        This page does not exist!
      </p>
      <NavLink
        to="/"
        style={{
          textUnderlineOffset: "0.2rem",
          display: "flex",
          gap: "0.2rem",
          alignItems: "center",
        }}
      >
        Go back to home page <ArrowRightAltIcon />
      </NavLink>
    </div>
  );
};
