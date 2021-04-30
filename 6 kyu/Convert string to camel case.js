// https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// 1. Solution

function toCamelCase(str) {
  let res = [];

  if (str === "") {
    res = [""];
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] == "-") {
      res.splice(i);
      res.push(str[i + 1].toUpperCase());
      i++;
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}
