import { FC } from "react";
import { StyledHabitBox } from "./styles";

interface HabitProps {
  title: string;
}

export const Habit: FC<HabitProps> = ({ title }) => {
  return (
    <StyledHabitBox>
      <span>{title}</span>
    </StyledHabitBox>
  );
};
