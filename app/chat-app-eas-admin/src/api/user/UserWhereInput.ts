import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  channels?: ChannelWhereUniqueInput;
  chat?: ChatWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
