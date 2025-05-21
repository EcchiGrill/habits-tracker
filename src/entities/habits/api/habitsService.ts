import { CreateHabitParameters, HabitResponse } from "./types";
import { api } from "@shared/api";

export class HabitsService {
  private static instance: HabitsService;

  constructor() {
    if (HabitsService.instance) {
      return HabitsService.instance;
    }
    HabitsService.instance = this;
  }

  async getHabits(): Promise<HabitResponse[]> {
    const resp = await api.get<HabitResponse[]>("/habits");
    return resp.data;
  }

  async createHabit({
    title,
    description,
  }: CreateHabitParameters): Promise<HabitResponse> {
    const habitPayload = {
      title,
      description,
      checked: false,
      createdAt: new Date().toISOString(),
    };

    const resp = await api.post<HabitResponse>("/habits", habitPayload);
    return resp.data;
  }
}
