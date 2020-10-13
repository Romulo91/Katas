// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

var sum_pairs = function (ints, s) {
  let res = undefined;
  let ind = ints.length;
  for (let i = 0; i < ints.length; i++) {
    for (let y = i + 1; y < ints.length; y++) {
      if (ints[i] + ints[y] == s && y < ind) {
        res = [ints[i], ints[y]];
        ind = y;
        break;
      }
    }
  }
  return res;
};
