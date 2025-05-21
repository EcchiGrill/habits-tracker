import { useUserStore } from "@entities/user";
import { Button } from "@shared/ui/Button";
import { FC } from "react";
import { StyledHeader } from "./styles";
import toast from "react-hot-toast";

export const Header: FC = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  return (
    <StyledHeader>
      <h1>Habit Tracker</h1>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {user && (
          <>
            <span style={{ fontSize: "1.2rem" }}>
              Hello, <b> {user.username}</b>!
            </span>
            <Button
              style={{
                backgroundColor: "#be2424",
              }}
              onClick={() => {
                logout();
                toast.error(`Logged out!`);
              }}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </StyledHeader>
  );
};
