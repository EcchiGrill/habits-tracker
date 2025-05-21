export interface HabitResponse {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  checked: boolean;
}

export interface CreateHabitParameters {
  title: string;
  description: string;
}
