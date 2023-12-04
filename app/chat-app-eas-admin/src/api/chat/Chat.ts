import { User } from "../user/User";

export type Chat = {
  content: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  usersFrom?: Array<User>;
  usersTo: string;
};
