// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// first sol.

function scramble(str1, str2) {
  let strOn = str1.split(" ").sort().join();
  let strtw = str2.split(" ").sort().join();
  var arr = [];

  for (let i = 0; i < strtw.length; i++) {
    for (let y = 0; y < strOn.length; y++) {
      if (strtw[i] === strOn[y]) {
        arr.push(str2[i]);
        break;
      }
    }
  }
  return arr.join("") === strtw;
}
