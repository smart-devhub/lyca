import { format, isValid } from 'date-fns';

export const formatDate = date => {
  let parsedDate;

  if (typeof date === 'string') {
    parsedDate = new Date(date);
  } else if (date instanceof Date) {
    parsedDate = date;
  } else if (typeof date === 'number') {
    parsedDate = new Date(date);
  } else {
    return date;
  }

  if (!isValid(parsedDate)) {
    return date;
  }
  return format(parsedDate, 'yyyy-MM-dd');
};
