import dayjs from 'dayjs';
import {Days, Months} from '../constants/constants';

export const getTransactionLabel = (date: dayjs.ConfigType) => {
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

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formatDate = (date: Date) => {
  const weekday = Days[date.getDay()];
  const day = date.getDate();
  const month = Months[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${weekday} ${day} ${month} ${year} ${hour}:${minute}`;
};

export const getMonth = () => {
  const month = Months[new Date().getMonth()];
  return month;
};
