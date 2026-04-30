// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

export function multiplicationTable(size: number): number[][] {
  // Implement me! :)
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => (row + 1) * (col + 1)),
  );
}

multiplicationTable(1); // [[1]])
multiplicationTable(2); // [[1, 2], [2, 4]])
multiplicationTable(3); // [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
