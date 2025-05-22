export interface HabitResponse {
  id: string;
  title: string;
  createdAt: string;
  checked: boolean;
}

export interface AddHabitParameters {
  title: string;
}

export interface EditHabitParameters {
  id: string;
  title?: string;
  checked?: boolean;
}
