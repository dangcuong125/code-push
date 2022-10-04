import dayjs from 'dayjs';

export function formatDate(date: string, format?: string) {
  return dayjs(date).format(format || 'DD/MM/YYYY HH:mm');
}

export const generateId = () => {
  return Math.floor(Math.random() * 100) + 1;
};
