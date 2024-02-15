/**
 * Splits an array into two parts with a ratio of 2:1.
 * @param {Array} arr - The array to split.
 * @returns {Array[]} An array containing two sub-arrays.
 **/

const splitArray = (arr) => {
  const length = arr.length;
  if (length === 0) {
    return [[], []];
  }

  const mid = Math.ceil(length * (2 / 3));
  return [arr.slice(0, mid), arr.slice(mid)];
};

export default splitArray;
