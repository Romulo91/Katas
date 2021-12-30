// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/solutions/javascript

const hamming = (a, b) => {
  counter = 0;
  [...a].forEach((el, i) => {
    if (el !== b[i]) counter++;
  });
  return counter;
};
