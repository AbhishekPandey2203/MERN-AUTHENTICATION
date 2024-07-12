// to handle the custom error--we make a separate error.js function

export const errorHandler = (statuscode, message) => {
  const error = new Error();
  error.statuscode = statuscode;
  error.message = message;
  return error;
};
