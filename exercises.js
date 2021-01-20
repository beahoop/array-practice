// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

//lets look at this in lap

// function buildArray(str, i) {
//   const arr = [];
//   for (var j = 0; i < j.length; j++) {
//     arr.push(str);
//   }
// }

function repeat(str, i) {
  str = `${str}, `;
return str.repeat(i);

};

console.log(repeat('sunshine', 3));



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------
// const a = [3,5,7,8]
// let b = reverseArr(a);
// function reverseArray(arr) {
//   let newarr = new Array;
//   for (var i = 0; i < arr.length; i++) {
//     newarr.push(arr[i]);
//   }
//   return newarr
// };
//>>>

const a = [3,5,7,8]
function reverseArray(arr) {
  let newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.unshift(arr[i]);
  }
  return newarr;
};
console.log(reverseArray(a));


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

let array = [1, false, 7, null, 0, NaN, 9]
function noFalsy(arr) {
  return arr.filter(Boolean); //using javascript filter with the call back function Boolean that will only return true
}
console.log(noFalsy(array));



// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------


const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]]

// from class
// function creatObj(arr) {
//   const result ={};
//   for (var i = 0; i < arr.length; i++) {
//     result[arr[i][0]] = arr[i][1];
//   }
// }

function objArray(arr) {
  const myObj = {};
  for (var i = 0; i < arr.length; i++) {
    // ['name', 'Charlie']
    const key = arr[i][0];//hey everytime you loop grab the index 0 in the array and set it to key;
    const value = arr[i][1];
    //add the key to the object then set the value to the key
    myObj[key] = value;
  }
  return myObj;
}

objArray(myArray);


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

let array1 = [1,2,3,4,5,4,3]

function removeDup(arr) {
  noDupArr = []
  for (var i = 0; i < arr.length; i++) {
    if(noDupArr.indexOf(arr[i]) === -1){ //if it returns -1 which means it did not find it then push the number thru
      noDupArr.push(arr[i]);
    }
  }
  return noDupArr;
};

removeDup(array1);



// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

// function compareArray(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
// arr1.sort();
// arr2.sort();
// for (var i = 0; i < arr.length; i++) {
//   if (arr1[i] !== arr2[i]) {
//     return false;
//   }
// }
//     return true;
// }

//JavaScript object notation
//JSON.parse -> changes it back
function arrMatch(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b))
  { return true;
  } else {
    return false;
  }
};
arrMatch([1,2, 'c',5], [1,2,3,4]);
///////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify



//1st try
// function arrMatch(arr1, arr2) {
//   for (var i = 0; i < arr1.length; i++) {
//     arr1[i] //this equal what the length of the arr is
//   }
//   for (var j = 0; j < arr2.length; j++) {
//     arr2[j]
//   }
//
//   if ( arr1.indexOf(arr1[i]) === arr2.indexOf(arr[j]) || arr2.indexOf(arr2[j]) === arr1.indexOf(arr1[i])) {
//     return true;
//   }else {
//     return false;
//   }
// };
//
// arrMatch([1,2,7,3,4], [1,2,3,4,5]);
//
// //you are only comparing the length of the arrays not the actual items in them.




// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------



function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i]))
    {result = result.concat(flattenArray(arr[i]))
    }
  }  else{
    result.push(arr[i]);
  }
}




// -----------------------------------------------
