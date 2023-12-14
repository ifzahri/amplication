import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChannelUpdateInput = {
  description?: string;
  Members?: UserWhereUniqueInput;
  messages?: string;
};
