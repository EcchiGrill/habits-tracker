import { create } from "zustand";
import { HabitsService, IHabit } from "@entities/habits";
import {
  CreateHabitParameters,
  EditHabitParameters,
} from "@entities/habits/api/types";

const habitsService = new HabitsService();

interface HabitsState {
  habits: IHabit[] | null;
  getHabits: () => Promise<IHabit[] | null>;
  getHabitById: (id: string) => IHabit | null;
  deleteHabit: (id: string) => Promise<IHabit | null>;
  editHabit: ({}: EditHabitParameters) => Promise<IHabit | null>;
  createHabit: ({}: CreateHabitParameters) => Promise<IHabit | null>;
}

export const useHabitsStore = create<HabitsState>((set, get) => ({
  habits: null,
  getHabits: async (): Promise<IHabit[] | null> => {
    try {
      const habits = await habitsService.getHabits();
      set({
        habits,
      });
      return habits;
    } catch (error) {
      console.error("Error fetching habits:", error);
      return null;
    }
  },

  createHabit: async ({
    title,
  }: CreateHabitParameters): Promise<IHabit | null> => {
    try {
      const habit = await habitsService.createHabit({
        title,
      });
      set({ habits: [habit, ...(get().habits || [])] });
      return habit;
    } catch (error) {
      console.error("Error creating habit:", error);
      return null;
    }
  },

  editHabit: async ({
    title,
    checked,
    id,
  }: EditHabitParameters): Promise<IHabit | null> => {
    try {
      const habit = await habitsService.editHabit({
        id,
        title,
        checked,
      });
      set({
        habits: get().habits?.map((h) => (h.id === id ? { ...habit } : h)),
      });
      return habit;
    } catch (error) {
      console.error("Error editing habit:", error);
      return null;
    }
  },

  deleteHabit: async (id: string): Promise<IHabit | null> => {
    try {
      const habit = await habitsService.deleteHabit(id);
      set({
        habits: get().habits?.filter((habit) => habit.id !== id) ?? null,
      });
      return habit;
    } catch (error) {
      console.error("Error deleting habit:", error);
      return null;
    }
  },

  getHabitById(id: string): IHabit | null {
    return get().habits?.find((habit) => habit.id === id) ?? null;
  },
}));
