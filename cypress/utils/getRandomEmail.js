export const getRandomEmail = () =>
  `newuser${new Date().getTime()}${Math.random()
    .toString(10)
    .substring(7)}@gmail.com`;
