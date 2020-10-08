// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let letters = text.toLowerCase().split("");
  let result = [];

  for (let i = 0; i < letters.length; i++) {
    for (let y = 0; y < alpha.length; y++) {
      letters[i] === alpha[y] ? result.push(y + 1) : "";
    }
  }
  return result.join(" ");
}
