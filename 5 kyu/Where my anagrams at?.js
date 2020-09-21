// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  res = [];
  let compare = word
    .split("")
    .sort((a, b) => a.toString().localeCompare(b))
    .join("");
  for (let i in words) {
    let str = words[i]
      .toString()
      .split("")
      .sort((a, b) => a.toString().localeCompare(b))
      .join("");
    if (compare === str) res.push(words[i]);
  }
  return res;
}

// 2. solution

function anagrams(word, words) {
  comp = word.split("").sort().join("");
  return words.filter((i) => comp === i.split("").sort().join(""));
}
