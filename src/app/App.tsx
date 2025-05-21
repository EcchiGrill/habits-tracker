import { FC, useEffect } from "react";
import { useHabitsStore } from "@entities/habits";
import { useUserStore } from "@entities/user";

const App: FC = () => {
  const user = useUserStore((state) => state.user);
  const auth = useUserStore((state) => state.auth);
  const logout = useUserStore((state) => state.logout);

  const habits = useHabitsStore((state) => state.habits);
  const getHabits = useHabitsStore((state) => state.getHabits);
  const createHabit = useHabitsStore((state) => state.createHabit);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "5rem",
        width: "50rem",
      }}
    >
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <h1>Habit Tracker</h1>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {user ? (
            <>
              <span>{user.username}</span>
              <button style={{ padding: "0.4rem" }} onClick={() => logout()}>
                Logout
              </button>
            </>
          ) : (
            <button
              style={{ padding: "0.4rem" }}
              onClick={async () => await auth()}
            >
              Login
            </button>
          )}
        </div>
      </div>

      <main
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        <ul>
          {habits && habits.map((habit, i) => <li key={i}>{habit.title}</li>)}
        </ul>
        <button
          onClick={async () => {
            await createHabit({
              title: "New Habit",
              description: "This is a new habit",
            });
          }}
        >
          Create Habit
        </button>
      </main>
    </div>
  );
};

export default App;
