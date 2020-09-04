// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // TODO: Program me
  const b = [];
  const l = [];
  for (let i in arr) {
    arr[i] !== 0 ? b.push(arr[i]) : l.push(arr[i]);
  }
  return b.concat(l);
};

// solution 2

const moveZeros = (arr) => {
  return arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0));
};
