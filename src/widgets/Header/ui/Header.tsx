import { useUserStore } from "@entities/user";
import { Button } from "@shared/ui/Button";
import { FC } from "react";
import { StyledHeader } from "./styles";
import toast from "react-hot-toast";
import { routesList } from "@app/routes";
import { Link } from "@shared/ui/Link";
import { useLocation } from "react-router-dom";

export const Header: FC = () => {
  const location = useLocation();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  return (
    <StyledHeader>
      <h1>Habit Tracker</h1>
      {user && (
        <>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {routesList.map((route, i) => (
              <Link
                to={route.path}
                key={i}
                isActive={location.pathname === route.path}
              >
                {route.name}
              </Link>
            ))}
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
