import { User } from "../user/User";

export type Channel = {
  createdAt: Date;
  description: string;
  id: string;
  Members?: User;
  messages: string;
  updatedAt: Date;
};
