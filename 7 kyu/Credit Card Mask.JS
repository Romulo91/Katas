/*
https://www.codewars.com/kata/5412509bd436bd33920011bc

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

*/

// 1. solution 

function maskify(cc) {


    let hashed = cc.split("").slice(0, cc.length -3).map(() =>{
      return '#' 
    } ) 
    console.log(hashed)
    return hashed.join("") + cc.substr(-4)
        
    }

// 2. solution

function maskify (s) {
    const cut = Math.max(0, s.length - 4);
      return new Array(cut).fill("#").join("") + s.substr(cut);
  }
