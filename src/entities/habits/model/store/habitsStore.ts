import { create } from "zustand";
import { HabitsService, IHabit } from "@entities/habits";
import { CreateHabitParameters } from "@entities/habits/api/types";

const habitsService = new HabitsService();

interface HabitsState {
  habits: IHabit[] | null;
  getHabits: () => Promise<IHabit[] | null>;
  getHabitById: (id: string) => IHabit | null;
  createHabit: ({}: CreateHabitParameters) => Promise<IHabit | null>;
}

export const useHabitsStore = create<HabitsState>((set, get) => ({
  habits: null,
  getHabits: async (): Promise<IHabit[] | null> => {
    try {
      const habits = await habitsService.getHabits();
      set({ habits });
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
      set({ habits: [...(get().habits || []), habit] });
      return habit;
    } catch (error) {
      console.error("Error creating habit:", error);
      return null;
    }
  },

  getHabitById(id: string): IHabit | null {
    return get().habits?.find((habit) => habit.id === id) ?? null;
  },
}));
