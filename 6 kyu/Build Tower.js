// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript
//
//     Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//     For example, a tower with 3 floors looks like this:
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]


function towerBuilder(nFloors) {
    const result = []

    for (let i = 0; i < nFloors; i++) {
        let spaces = ' '.repeat(nFloors - i - 1)
        let star = '*'.repeat(i * 2 +1)
        result.push(spaces + star + spaces)
    }

    return result
}


//

function towerBuilder(nFloors) {
    // build here
    let space,star, result = [];
    for(i = 1; i <= nFloors; i++){
        space = " ".repeat(nFloors - i);
        star  = "*".repeat((2*i) - 1);
        result.push(`${space}${star}${space}`);
    }
    return result
}
