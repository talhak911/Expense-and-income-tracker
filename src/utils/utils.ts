import dayjs from "dayjs";

export const getTransactionLabel = (date:dayjs.ConfigType) => {
    if (dayjs(date).isSame(dayjs(), 'day')) {
      return 'Today';
    } else if (dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day')) {
      return 'Yesterday';
    } else if (dayjs(date).isSame(dayjs(), 'week')) {
      return 'This Week';
    } else if (dayjs(date).isSame(dayjs().subtract(1, 'week'), 'week')) {
      return 'Last Week';
    } else if (dayjs(date).isSame(dayjs(), 'month')) {
      return 'This Month';
    } else if (dayjs(date).isSame(dayjs().subtract(1, 'month'), 'month')) {
      return 'Last Month';
    } else {
      return 'Older';
    }
  };