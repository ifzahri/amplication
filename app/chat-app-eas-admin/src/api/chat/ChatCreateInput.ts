import { UserCreateNestedManyWithoutChatsInput } from "./UserCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  content: string;
  usersFrom?: UserCreateNestedManyWithoutChatsInput;
  usersTo: string;
};
