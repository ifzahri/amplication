import { SortOrder } from "../../util/SortOrder";

export type ChannelOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  members_channels?: SortOrder;
  messages?: SortOrder;
  updatedAt?: SortOrder;
};
