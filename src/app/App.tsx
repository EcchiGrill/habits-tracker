import { FC } from "react";
import { Header } from "@widgets/Header";
import { createPortal } from "react-dom";
import { LoginModal } from "@features/LoginModal";
import { ActiveHabits } from "@widgets/ActiveHabits";
import { useUserStore } from "@entities/user";

const App: FC = () => {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBlock: "6rem",
        }}
      >
        <ActiveHabits />
        {!user &&
          createPortal(
            <LoginModal />,
            document.getElementById("root") as HTMLElement
          )}
      </main>
    </>
  );
};

export default App;
