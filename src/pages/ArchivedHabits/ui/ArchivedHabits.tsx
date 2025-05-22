import { useHabitsStore } from "@entities/habits";
import { StyledWrapperBox } from "./styles";
import { FC, useEffect } from "react";
import { Habit } from "@features/Habit";
import { useUserStore } from "@entities/user";
import { createPortal } from "react-dom";
import { LoginModal } from "@features/LoginModal";
import { PAGE_ITEMS_COUNT } from "@shared/const/PageItemsCount";
import { Pagination, PaginationItem } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";

export const ArchivedHabits: FC = () => {
  const user = useUserStore((state) => state.user);
  const { pageNumber } = useParams();
  const filteredHabits = useHabitsStore((state) => state.habits)?.filter(
    (h) => h.checked
  );
  const habits = filteredHabits?.filter(
    (_, i) =>
      i >= (Number(pageNumber ?? 0) - 1) * PAGE_ITEMS_COUNT &&
      i < Number(pageNumber ?? 1) * PAGE_ITEMS_COUNT
  );

  const pageCount = Math.ceil((filteredHabits || []).length / PAGE_ITEMS_COUNT);
  const getHabits = useHabitsStore((state) => state.getHabits);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
      <h1>Archived Habits</h1>
      <StyledWrapperBox>
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {habits?.length ? (
            habits.map((habit) => (
              <Habit key={habit.id} id={habit.id} title={habit.title} checked />
            ))
          ) : (
            <p style={{ color: "gray" }}>No archived habits found</p>
          )}
        </div>
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            renderItem={(item) => (
              <NavLink
                to={"/archived/" + item.page?.toString()}
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
