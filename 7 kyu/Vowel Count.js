// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// 1. solution

function getCount(str) {
  var vowelsCount = 0;

  str.split("").forEach((i) => {
    return i === "a" || i === "e" || i === "i" || i === "o" || i === "u"
      ? (vowelsCount += 1)
      : 0;
  });

  return vowelsCount;
}

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

// 2. solution

function getCount(str) {
  return str.split("").filter((i) => "aeiouAEIOU".includes(i)).length;
}
