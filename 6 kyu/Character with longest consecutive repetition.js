// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

// Test.describe("Longest repetition", ()=>{
//     Test.it("Example tests", function(){
//       Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4] );
//       Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4] );
//       Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3] );
//       Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5] );
//       Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2] );
//       Test.assertDeepEquals( longestRepetition(""),             ["",0] );
//     });
//   });

function longestRepetition(s) {
  let current = 0;
  let long = ["", 0];
  for (let i in s) {
    if (s[i - 1] == s[i]) {
      current++;
    } else current = 1;
    if (current > long[1]) {
      long = [s[i], current];
    }
  }
  return long;
}
