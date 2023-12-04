import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  usersTo?: SortOrder;
};
