// https://www.codewars.com/kata/59fab1f0c9fc0e7cd4000072/train/javascript

// For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string

function solve(a, b) {
  let res = [...a].reduce((ac, cu) => ((ac[cu] = ac[cu] + 1 || 1), ac), {});
  console.log(res);
  for (let i in b) {
    console.log(b[i]);
    if (res[b[i]] > 0) {
      res[b[i]] = res[b[i]] - 1;
    } else return 0;
  }
  return Object.values(res).reduce((a, c) => c + a, 0);
}
