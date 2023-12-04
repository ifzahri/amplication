import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  channels?: ChannelWhereUniqueInput | null;
  chat?: ChatWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
