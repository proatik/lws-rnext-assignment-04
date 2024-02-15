/**
 * Calculates the relative date or formats the date in "DD Mon YYYY" format.
 * @param {string} inputDate - The input date (in ISO 8601 format).
 * @returns {string} The relative date or formatted date string.
 */
const relativeDate = (inputDate) => {
  const currentDate = new Date();
  const inputDateObj = new Date(inputDate);

  const timeDifference = currentDate.getTime() - inputDateObj.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (daysDifference === 0) {
    if (hoursDifference > 0) {
      return `${hoursDifference} hours ago`;
    } else if (minutesDifference > 0) {
      return `${minutesDifference} minutes ago`;
    } else {
      return "just now";
    }
  } else if (daysDifference === 1) {
    return "yesterday";
  } else {
    // Format date as "DD Mon YYYY"
    const options = { year: "numeric", month: "short", day: "numeric" };
    return inputDateObj.toLocaleDateString(undefined, options);
  }
};

export default relativeDate;
