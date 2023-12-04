import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChannelCreateInput = {
  description: string;
  Members: UserWhereUniqueInput;
  messages: string;
};
