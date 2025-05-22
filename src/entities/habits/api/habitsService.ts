import {
  AddHabitParameters,
  EditHabitParameters,
  HabitResponse,
} from "./types";
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
    return resp.data.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  async addHabit({ title }: AddHabitParameters): Promise<HabitResponse> {
    const habitPayload = {
      title,
      checked: false,
      createdAt: new Date().toISOString(),
    };

    const resp = await api.post<HabitResponse>("/habits", habitPayload);
    return resp.data;
  }

  async deleteHabit(id: string): Promise<HabitResponse> {
    const resp = await api.delete<HabitResponse>(`/habits/${id}`);
    return resp.data;
  }

  async editHabit({
    id,
    title,
    checked,
  }: EditHabitParameters): Promise<HabitResponse> {
    const habitPayload = {
      title,
      checked,
    };

    const resp = await api.patch<HabitResponse>(`/habits/${id}`, habitPayload);
    return resp.data;
  }
}
