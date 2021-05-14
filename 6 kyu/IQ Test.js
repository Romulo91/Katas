// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
  const odd = [];
  const even = [];
  numbers
    .split(" ")
    .filter((e, i) => (e % 2 ? odd.push(i + 1) : even.push(i + 1)));
  return odd.length > even.length ? even[0] : odd[0];
}
