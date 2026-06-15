// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript

 function findUniq(arr: number[]): number {
    // Do the magic
     return arr.find((number) => arr.lastIndexOf(number) === arr.indexOf(number))!
}



findUniq([ 1, 0, 0 ]) // , 1);
findUniq([ 0, 1, 0 ]) // , 1);
findUniq([ 0, 0, 1 ]) // , 1);
findUniq([ 1, 1, 1, 2, 1, 1 ]) // , 2);
findUniq([ 1, 1, 2, 1, 1 ]) // , 2);
findUniq([ 3, 10, 3, 3, 3 ]) // , 10);