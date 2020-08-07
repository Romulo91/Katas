// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing" 




function solution(string) {
    let a = string.split('')
    console.log(a)
    for (let i = 0; i < a.length; i++){
      if (a[i] === a[i].toUpperCase()) {
        a.splice(i, 0, " ");
        i += 2
      }
    }
    return a.join('')
}