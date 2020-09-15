// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript?fbclid=IwAR1lpFFD_o1RXtk6yUChNVPTnWPUxaOgwuyEyaX4IIln3Avo_roKZqYZIrg

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  return (
    parens
      .split("")
      .reduce((p, c) => (p < 0 ? p : c === "(" ? p + 1 : p - 1), 0) === 0
  );
}
