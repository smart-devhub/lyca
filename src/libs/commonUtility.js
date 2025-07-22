import { format, addHours, parse, eachDayOfInterval } from 'date-fns';

const formatSelectList = ({ list, labelKey = 'name', valueKey = 'id' }) => {
  return (
    list?.map(el => ({
      label: el[labelKey],
      value: el[valueKey],
    })) || []
  );
};

const convertUtcToLocalTimeWithOffset = time => {
  // Parse the UTC time (assumes the time is in HH:mm:ss format)
  const parsedTime = parse(time, 'HH:mm:ss', new Date());

  // Add 5 hours to convert the UTC time to the desired local time
  const timeWithOffset = addHours(parsedTime, 5);

  return timeWithOffset;
};

const getWeekDaysBetween = (start, end) => {
  const uniqueWeekDays = new Set(
    eachDayOfInterval({ start: new Date(start), end: new Date(end) }).map(
      date => format(date, 'EEEE')
    ) // Get full weekday name
  );

  return [...uniqueWeekDays];
};

function replaceFileExtension(fileName, newExtension) {
  return fileName.replace(/\.[^/.]+$/, `.${newExtension}`);
}

export {
  formatSelectList,
  getWeekDaysBetween,
  replaceFileExtension,
  convertUtcToLocalTimeWithOffset,
};
