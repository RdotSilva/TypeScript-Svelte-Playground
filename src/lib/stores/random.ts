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

/**
 * Generate a random symbol
 * @returns A random symbol
 */
const generateRandomSymbol = (): string => {
  const symbols = "!@#$%^&*()_-+={}[]|;:'\"<>,.?/`~";
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

const generateRandomPassword = (length: number): string => {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+={}[]|;:'\"<>,.?/`~";

  const allChars = lowercaseLetters + uppercaseLetters + numbers + symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};
