import formatRelative from "date-fns/formatRelative";
export const formatDate = (date: Date) => {
  const formatted: string = formatRelative(
    Date.parse(date.toString()),
    new Date()
  );

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
