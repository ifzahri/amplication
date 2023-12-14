import { UserUpdateManyWithoutChatsInput } from "./UserUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  content?: string;
  usersFrom?: UserUpdateManyWithoutChatsInput;
  usersTo?: string;
};
