import { Channel } from "../channel/Channel";
import { Chat } from "../chat/Chat";
import { JsonValue } from "type-fest";

export type User = {
  channels?: Channel | null;
  chat?: Chat | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
