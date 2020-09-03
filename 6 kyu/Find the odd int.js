// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(a) {
  //happy coding!
  const arr = a.reduce((a, c) => {
    a[c] = a[c] ? a[c] + 1 : 1;
    return a;
  }, {});

  for (let i in arr) {
    if (arr[i] % 2 != 0) {
      return parseInt(i);
    }
  }
}
