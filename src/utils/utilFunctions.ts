export const errorHandle = (errors) => {
  if (!errors.isEmpty()) {
    for (const error of errors.array()) {
      throw new SyntaxError(error.param + " has " + error.msg + " at " + error.location);
    }
  }
};
