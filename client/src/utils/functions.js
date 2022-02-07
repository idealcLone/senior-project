export const sortDays = (days) => {
  const weekDays = ['M', 'T', 'W', 'R', 'F'];

  return weekDays.filter((day) => days.includes(day));
};

export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

export const formatDate = (date) => {
  return date && new Date(date).toJSON().slice(0, 10);
};

export const getToday = () => {
  return new Date().toJSON().slice(0, 10);
};
