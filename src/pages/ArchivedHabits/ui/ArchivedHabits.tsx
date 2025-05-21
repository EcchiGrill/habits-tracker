import { useHabitsStore } from "@entities/habits";
import { StyledWrapperBox } from "./styles";
import { FC, useEffect } from "react";
import { Habit } from "@features/Habit";

export const ArchivedHabits: FC = () => {
  const habits = useHabitsStore((state) => state.habits);
  const getHabits = useHabitsStore((state) => state.getHabits);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
      <h1>Archived Habits</h1>
      <StyledWrapperBox>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {habits ? (
            habits.map(
              (habit) =>
                habit.checked && (
                  <Habit
                    key={habit.id}
                    id={habit.id}
                    title={habit.title}
                    checked
                  />
                )
            )
          ) : (
            <p>No archived habits found.</p>
          )}
        </div>
      </StyledWrapperBox>
    </div>
  );
};
