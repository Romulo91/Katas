// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// I solution

function maxChar(str) {
  const Map = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (Map[char]) {
      Map[char]++;
    } else {
      Map[char] = 1;
    }
  }

  for (let char in Map) {
    if (Map[char] > max) {
      max = Map[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// II solution

function maxChar(str) {
  let num = 0;
  let s = "";

  const max = str.split("").reduce((a, c, i) => {
    a[c] = a[c] ? a[c] + 1 : 1;
    return a;
  }, {});

  for (let i in max) {
    if (max[i] > num) {
      num = max[i];
      s = i;
    }
  }
  return s;
}
