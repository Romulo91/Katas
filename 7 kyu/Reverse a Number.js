// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

// the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// reverseNumber(123), 321)
// reverseNumber(-123), -321, 'Negative Numbers should be preserved')
// reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
// reverseNumber(4321234), 4321234)
// reverseNumber(5), 5)
// reverseNumber(0), 0)
// reverseNumber(98989898), 89898989)

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// I Solution

function reverseNumber(n) {
  const res = n
    .toString()
    .split("")
    .reduce((a, c) => parseInt(c + a));
  return n < 0 ? res * -1 : parseInt(res);
}
