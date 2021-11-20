export const sortDays = (days) => {
  const weekDays = ['M', 'T', 'W', 'R', 'F']

  return weekDays.filter(day => days.includes(day))
}