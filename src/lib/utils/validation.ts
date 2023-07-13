/**
 * Validate that a required value is present
 * @param value The value you want to validate
 * @param label The label of the value you want to validate
 * @returns
 */
export const validateRequiredField = (value, label = "Field") => {
  let error;
  if (!value) {
    error = `The ${label} is Required.`;
  }
  return error;
};

/**
 * Validate if an email is present and valid
 * @param value The value of the email
 * @param label The label of the email
 * @returns
 */
export const validateEmail = (value, label = "Email") => {
  let error;
  if (value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    error = `The ${label} is Invalid.`;
  }
  return error;
};
