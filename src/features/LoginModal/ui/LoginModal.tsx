import { Button } from "@shared/ui/Button";
import { StyledModal, StyledBg } from "./styles";
import { FC, useState } from "react";
import { useUserStore } from "@entities/user";
import toast from "react-hot-toast";

export const LoginModal: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const auth = useUserStore((state) => state.auth);

  return (
    isOpen && (
      <>
        <StyledModal>
          <h1 style={{ fontSize: "2.7rem", textAlign: "center" }}>
            Welcome to Habit Tracker!
          </h1>
          <Button
            style={{
              paddingBlock: "0.5rem",
              fontSize: "1rem",
              backgroundColor: "#10941f",
            }}
            onClick={async () => {
              const user = await auth();
              setIsOpen(false);
              toast.success(`Welcome, ${user?.username}!`);
            }}
          >
            Login
          </Button>
        </StyledModal>
        <StyledBg />
      </>
    )
  );
};
