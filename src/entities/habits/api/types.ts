export interface HabitResponse {
  id: string;
  title: string;
  createdAt: string;
  checked: boolean;
}

export interface CreateHabitParameters {
  title: string;
}

export interface EditHabitParameters {
  id: string;
  title?: string;
  checked?: boolean;
}
