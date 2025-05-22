import { useHabitsStore } from "@entities/habits";
import { StyledWrapperBox } from "./styles";
import { FC, FormEvent, useEffect, useState } from "react";
import { Button } from "@shared/ui/Button";
import { Input, Pagination, PaginationItem } from "@mui/material";
import toast from "react-hot-toast";
import { Habit } from "@features/Habit";
import { LoginModal } from "@features/LoginModal";
import { createPortal } from "react-dom";
import { useUserStore } from "@entities/user";
import { PAGE_ITEMS_COUNT } from "@shared/const/PageItemsCount";
import { NavLink, useParams } from "react-router-dom";

export const ActiveHabits: FC = () => {
  const [title, setTitle] = useState("");
  const { pageNumber } = useParams();

  const user = useUserStore((state) => state.user);
  const filteredHabits = useHabitsStore((state) => state.habits)?.filter(
    (h) => !h.checked
  );

  const habits = filteredHabits?.filter(
    (_, i) =>
      i >= (Number(pageNumber ?? 0) - 1) * PAGE_ITEMS_COUNT &&
      i < Number(pageNumber ?? 1) * PAGE_ITEMS_COUNT
  );

  const pageCount = Math.ceil((filteredHabits || []).length / PAGE_ITEMS_COUNT);
  const getHabits = useHabitsStore((state) => state.getHabits);
  const addHabit = useHabitsStore((state) => state.addHabit);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!title) return toast.error("Please enter a habit title.");

    try {
      await addHabit({
        title,
      });
      setTitle("");
      toast.success("Habit added successfully!");
    } catch (error) {
      console.error("Error adding habit:", error);
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
          <Button type="submit">Add Habit</Button>
        </form>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {habits?.length ? (
            habits.map((habit) => (
              <Habit key={habit.id} id={habit.id} title={habit.title} />
            ))
          ) : (
            <p style={{ color: "gray" }}>No habits found</p>
          )}
        </div>
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            renderItem={(item) => (
              <NavLink
                to={"/active/" + item.page?.toString()}
                replace
                onClick={(e) => {
                  if (!item.page || item.page > pageCount) e.preventDefault();
                }}
              >
                <PaginationItem
                  {...item}
                  selected={Number(pageNumber ?? 1) === item.page}
                />
              </NavLink>
            )}
          />
        )}
      </StyledWrapperBox>
      {!user &&
        createPortal(
          <LoginModal />,
          document.getElementById("root") as HTMLElement
        )}
    </div>
  );
};
