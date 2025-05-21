export interface HabitResponse {
  id: string;
  title: string;
  createdAt: string;
  checked: boolean;
}

export interface CreateHabitParameters {
  title: string;
}
