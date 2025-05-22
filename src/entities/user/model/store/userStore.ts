import { create } from "zustand";
import { UserService, IUser } from "@entities/user";

const userService = new UserService();

interface UserState {
  user: IUser | null;
  auth: () => Promise<IUser | null>;
  // Store logout
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  auth: async (): Promise<IUser | null> => {
    try {
      const user = await userService.auth();
      set({ user });
      return user;
    } catch (error) {
      console.error("Auth Error:", error);
      return null;
    }
  },

  logout: (): void => {
    set({ user: null });
  },
}));
