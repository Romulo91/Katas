// https://www.codewars.com/kata/sum-of-odd-numbers/train/javascript

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

const rowSumOddNumbers = (someNum) => {
  const theArr = [];
  let theFirst = someNum * (someNum - 1) + 1;

  for (let i = 0; i < someNum; i++) {
    theArr.push(theFirst);
    theFirst = theFirst + 2;
  }
  return theArr.reduce((a, b) => a + b);
};

rowSumOddNumbers(6);
