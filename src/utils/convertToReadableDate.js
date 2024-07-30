export const convertToReadableDate = (date) => {
  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const readableDate = newDate.toLocaleString("en-US", options);

  return readableDate;
};
