//Declare a function 'grab'.
//function that takes two inputs: an array of arrays and an index
//returns an array of the values stored at that index in each nested array.

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


  
//Repeat example
let message = "We are the the champions";
let repeatFiveTimes = message.repeat(5);
console.log(repeatFiveTimes)



//Tells you about a character has ot not has.
let messages = "We are the the champions.";
let lastCharacter = messages.slice(-1);
let period = lastCharacter === ".";
console.log(period)


//find distance and index 
let str = "Wfdgdsgdgsdfgedfkldaklfet";
let firstIndex = str.indexOf('e');
let distanceFromBeginning; 

if (firstIndex !== -1 ) {
    distanceFromBeginning = firstIndex + 1 ; 
} else {
    distanceFromBeginning = -1
};
console.log(distanceFromBeginning);




//find distance and index from end 
let string = "wkljkdfjkkdewr";
let lastIndex = string.lastIndexOf("e"); 
let distanceFromEnd;

if (lastIndex !== -1) {
    distanceFromEnd = string.length - lastIndex;
} else {
    distanceFromEnd = -1;
};

console.log(distanceFromEnd)



//check leapYear 
let name = "Fontain";
let year = 1981;
let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
    isLeapYear = true;
    } else {
    isLeapYear =  false;
    }

console.log(isLeapYear);



// Number range check
let min = 1024;
let max = 16384;
let number = 511000;
let inRange;

if (number > min && number < max) {
  inRange = "In range";
} else {
  inRange = "Out of range";
}

console.log(inRange);




//If statement example 
let language = "japanese";

if ( language == "english"){
    console.log("Hello, cat")
} else if (language == "japanese"){
    console.log("Konichwa, neko")
} else if (language == "spanish"){
    console.log("Hola, Gato")
} else {
    console.log("Language not supported")
};

