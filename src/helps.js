export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const range = (lowerLimit, upperLimit, step = 1) => {
  const arrLength = Math.floor((upperLimit - lowerLimit) / step) + 1;
  return Array(arrLength).fill(lowerLimit)
    .map((num, i) => (i === 0 ? num : num + step * i));
};
