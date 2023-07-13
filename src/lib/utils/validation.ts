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

