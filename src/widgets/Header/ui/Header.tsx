import { useUserStore } from "@entities/user";
import { Button } from "@shared/ui/Button";
import { FC } from "react";
import { StyledHeader } from "./styles";
import toast from "react-hot-toast";
import { routesList } from "@app/routes";
import { Link } from "@shared/ui/Link";
import { NavLink, useLocation } from "react-router-dom";

export const Header: FC = () => {
  const location = useLocation();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  return (
    <StyledHeader>
      <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>Habits Tracker</h1>
      </NavLink>

      {user && (
        <>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {routesList.map((route, i) => {
              const path = route.path.split(":")[0].slice(0, -1);

              return (
                <Link
                  to={path}
                  key={i}
                  isActive={location.pathname.includes(path)}
                >
                  {route.name}
                </Link>
              );
            })}
          </nav>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span style={{ fontSize: "1.2rem" }}>
              Hello, <b> {user.username}</b>!
            </span>
            <Button
              style={{
                backgroundColor: "#be2424",
              }}
              onClick={() => {
                logout();
                toast.success(`Logged out!`);
              }}
            >
              Logout
            </Button>
          </div>
        </>
      )}
    </StyledHeader>
  );
};
