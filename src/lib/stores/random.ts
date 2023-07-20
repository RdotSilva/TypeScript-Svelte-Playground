/**
 * Generate a random number between 0 and maxValue
 * @param maxValue Max value for the number to be generated
 * @returns A random number between 0 and the number specified
 */
const generateRandomNumber = (maxValue: number): number =>
  Math.floor(Math.random() * (maxValue + 1));
