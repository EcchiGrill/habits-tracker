import { useHabitsStore } from "@entities/habits";
import { StyledWrapperBox } from "./styles";
import { FC, FormEvent, useEffect, useState } from "react";
import { Button } from "@shared/ui/Button";
import { Input } from "@mui/material";
import { Habit } from "./Habit";
import toast from "react-hot-toast";

export const ActiveHabits: FC = () => {
  const [title, setTitle] = useState("");
  const habits = useHabitsStore((state) => state.habits);
  const getHabits = useHabitsStore((state) => state.getHabits);
  const createHabit = useHabitsStore((state) => state.createHabit);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
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
        {habits?.map((habit) => (
          <Habit key={habit.id} title={habit.title} />
        ))}
      </div>
    </StyledWrapperBox>
  );
};
