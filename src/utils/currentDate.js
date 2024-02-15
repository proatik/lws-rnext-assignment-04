/**
 * Returns the current date in the format "Thursday, February 25, 2021".
 * @returns {string} The current date in the specified format.
 **/
const currentDate = () => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const currentDate = new Date();
  return currentDate.toLocaleDateString(undefined, options);
};

export default currentDate;
