/* Declare a function 'grab'.

'grab' takes two inputs: an array of arrays and an index

'grab' returns an array of the values stored 
at that index in each nested array.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets */
// Your code here

const finalArray = []
function grab(arr, index) {
    for ( let i = 0; i < arr.length; i ++ ) {
        const indexLocation = arr[i];
     if (index >= 0 && index < indexLocation.length ) {
        const valueIndex = indexLocation[index];
        finalArray.push(valueIndex)
     }
    }
    return finalArray;
}
  // Tests - You should not need to change the tests
  
  const myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
  
  let actual = grab(myGrid, 1);
  let expected = ["b", "e", "h"];
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
  } else {
    console.log("Try again!");
  }
  
  const anotherGrid = [
    ["duck", "goose"],
    ["cat", "dog"],
    ["horse", "donkey"],
    ["giraffe", "zebra"],
  ];
  
  actual = grab(anotherGrid, 0);
  expected = ["duck", "cat", "horse", "giraffe"];
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
  } else {
    console.log("Try again!");
  }
  
  const oneMoreGrid = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10"],
  ];
  
  actual = grab(oneMoreGrid, 3);
  expected = ["4", "9"];
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay!");
  } else {
    console.log("Try again!");
  }