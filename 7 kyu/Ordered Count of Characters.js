
/*
https://www.codewars.com/kata/57a6633153ba33189e000074
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/


var orderedCount = function (text) {
    let arr = text.split("");
    const unique = arr.filter(function (el, index){
      return arr.indexOf(el) === index  
    });
  let result = [];
      unique.forEach(function (el) {
      const count = text.split(el).length -1
      result.push([el , count])
      })
      return result;
  }
  