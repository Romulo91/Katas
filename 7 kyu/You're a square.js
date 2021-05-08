// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function (n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0 ? true : false;
};
