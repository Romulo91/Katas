// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
  var str = "";

  if (names === undefined) {
    return str;
  }
  for (var i = 0; i < names.length; i++) {
    // this loop runs through each index of the array. Each one is an Object
    // console.log("names[i]", names[i]["name"])
    if (i >= names.length - 2) {
      str += names[i]["name"] + " & ";
    } else {
      str += names[i]["name"] + ", ";
    }
  }
  return str.slice(0, str.length - 3);
}
