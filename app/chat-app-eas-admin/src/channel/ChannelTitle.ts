import { Channel as TChannel } from "../api/channel/Channel";

export const CHANNEL_TITLE_FIELD = "id";

export const ChannelTitle = (record: TChannel): string => {
  return record.id?.toString() || String(record.id);
};
