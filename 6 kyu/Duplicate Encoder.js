// 1.

function duplicateEncode(word) {
  const res = [];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let sum = 0;
    for (let y = 0; y < word.length; y++) {
      if (word[i] === word[y]) {
        sum++;
        if (sum > 1) {
          break;
        }
      }
    }
    if (sum > 1) {
      res.push(")");
    } else {
      res.push("(");
    }
  }
  return res.join("");
}

// 2.

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((curr, i, a) => {
      return a.lastIndexOf(curr) === a.indexOf(curr) ? "(" : ")";
    })
    .join("");
}
