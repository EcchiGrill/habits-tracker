import { FC, useState } from "react";
import { StyledBox, StyledInput } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useHabitsStore } from "@entities/habits";
import { IconButton } from "@shared/ui/IconButton";
import toast from "react-hot-toast";

interface HabitProps {
  id: string;
  title: string;
  checked?: boolean;
}

export const Habit: FC<HabitProps> = ({ id, title, checked = false }) => {
  const [editingTitle, setEditingTitle] = useState(title);
  const editHabit = useHabitsStore((state) => state.editHabit);
  const deleteHabit = useHabitsStore((state) => state.deleteHabit);

  return (
    <StyledBox>
      <StyledInput
        checked={checked}
        value={editingTitle}
        onChange={(e) => setEditingTitle(e.currentTarget.value)}
        onBlur={async () => {
          if (editingTitle === title || !editingTitle) return;
          await editHabit({ id, title: editingTitle });
          toast.success("Habit edited successfully!");
        }}
      />
      <div>
        <IconButton
          onClick={async () => {
            await editHabit({ id, checked: !checked });
            toast.success(
              !checked
                ? "Habit marked successfully!"
                : "Habit unmarked successfully!"
            );
          }}
        >
          {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </IconButton>
        <IconButton
          onClick={async () => {
            await deleteHabit(id);
            toast.success("Habit deleted successfully!");
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </StyledBox>
  );
};
