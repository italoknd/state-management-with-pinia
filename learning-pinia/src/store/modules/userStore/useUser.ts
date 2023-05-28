import { defineStore } from "pinia";
import { User } from "../../../interfaces/userInterfaces/user";

export const useUser = defineStore("user", {
  state: () => ({
    user_infos: {} as User,
  }),
  actions: {
    updateUserInfos(user_infos: User) {
      this.user_infos = user_infos;
    },
  },
});
