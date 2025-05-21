import { useHabitsStore } from "@entities/habits";
import { StyledWrapperBox } from "./styles";
import { FC, FormEvent, useEffect, useState } from "react";
import { Button } from "@shared/ui/Button";
import { Input } from "@mui/material";
import toast from "react-hot-toast";
import { Habit } from "@features/Habit";

export const ActiveHabits: FC = () => {
  const [title, setTitle] = useState("");
  const habits = useHabitsStore((state) => state.habits);
  const getHabits = useHabitsStore((state) => state.getHabits);
  const createHabit = useHabitsStore((state) => state.createHabit);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!title) return toast.error("Please enter a habit title.");

    try {
      await createHabit({
        title,
      });
      setTitle("");
      toast.success("Habit created successfully!");
    } catch (error) {
      console.error("Error creating habit:", error);
    }
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
      }}
    >
      <h1>Active Habits</h1>
      <StyledWrapperBox>
        <form
          onSubmit={submitHandler}
          style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
        >
          <Input
            placeholder="Enter habit title.."
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <Button type="submit">Create Habit</Button>
        </form>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {habits ? (
            habits.map(
              (habit) =>
                !habit.checked && (
                  <Habit key={habit.id} id={habit.id} title={habit.title} />
                )
            )
          ) : (
            <p>No habits found.</p>
          )}
        </div>
      </StyledWrapperBox>
    </div>
  );
};
