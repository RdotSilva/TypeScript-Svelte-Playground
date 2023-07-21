/**
 * Generate a random number between 0 and maxValue
 * @param maxValue Max value for the number to be generated
 * @returns A random number between 0 and the number specified
 */
const generateRandomNumber = (maxValue: number): number =>
  Math.floor(Math.random() * (maxValue + 1));

/**
 * Generate a single letter randomly from the alphabet
 * @returns A random letter from a-z
 */
const generateRandomLetter = (): string => {
  const charCodeA = "a".charCodeAt(0);
  const charCodeZ = "z".charCodeAt(0);
  const randomCharCode =
    Math.floor(Math.random() * (charCodeZ - charCodeA + 1)) + charCodeA;
  return String.fromCharCode(randomCharCode);
};
