// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/solutions/javascript

function findMissingLetter(array) {
  let res = array.find((el, i) => {
    if (el.charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      return el.charCodeAt() + 1;
    }
  });
  return String.fromCharCode(res.charCodeAt(0) + 1);
}
