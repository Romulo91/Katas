// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (str.length === 0) return false;

  let res = str.split(" ").map((i) => i.charAt(0).toUpperCase() + i.slice(1));

  return res.join("").length >= 140 || res.join("").length === 0
    ? false
    : "#" + res.join("");
}
