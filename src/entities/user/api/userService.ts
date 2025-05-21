import { api } from "@shared/api";
import { UserResponse } from "./types";

export class UserService {
  private static instance: UserService;

  constructor() {
    if (UserService.instance) {
      return UserService.instance;
    }
    UserService.instance = this;
  }

  async auth(): Promise<UserResponse> {
    const resp = await api.get<UserResponse>("/auth");
    return resp.data;
  }
}
