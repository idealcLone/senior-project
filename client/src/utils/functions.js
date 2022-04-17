const weekDays = ['M', 'T', 'W', 'R', 'F'];

export const sortDays = days => {
  return weekDays.filter(day => days.includes(day));
};

export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

export const formatDate = date => {
  return date && new Date(date).toJSON().slice(0, 10);
};

export const getToday = () => {
  return new Date().toJSON().slice(0, 10);
};

export const getDayLetter = index => {
  return weekDays[index];
};

export const getDayValue = day => {
  return weekDays.findIndex(weekDay => weekDay === day);
};

export const addDays = days => {
  const result = new Date();
  result.setDate(result.getDate() + days);
  return result;
};

export const subtractDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};
