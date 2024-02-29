// January 30


//Funtion that takes in an array and adds the ends but if only 1 
//number, it will print that number

function addTheEnds(arr) {
    if (arr.length === 0) {
        return 0; // If the array is empty, return 0
    } else if (arr.length === 1) {
        return arr[0]; // If there's only one number in the array, return that number
    }
    
    let result = arr[0] + arr[arr.length - 1]; // Initialize result outside the loop
    return result; // Return result outside the loop
}

console.log(addTheEnds([1, 3, 5])); // should return 6
console.log(addTheEnds([1, 3, 5, 43, 43])); // should return 6
console.log(addTheEnds([4])); // should return 4, not 8
console.log(addTheEnds([5])); // should return 4, not 8
console.log(addTheEnds([])); // should return 0



//Function speak fast that takes string and returns new string spaces 
//all removed 
function speakFast(str) { 
    let result = str.replace(/\s/g, "");
    return result;
}

console.log(speakFast("If you call in the next 10 minutes you can get the air freshener freeeee!"));





//function that counts up of positive numbers 
function countUp(num) { 
    let total = []
    for ( let i = 1; i <= num; i++){
        total.push(i)
    }
    return total; 
}
console.log(countUp(6)); // returns [1, 2, 3, 4, 5, 6])



//function that counts up by 2 of positive numbers 
function countUp(num) { 
    let total = []
    for ( let i = 1; i <= num; i += 2){
        total.push(i)
    }
    
    return total; 
}
console.log(countUp(6)); // returns [1, 2, 3, 4, 5, 6])





//funtion that counts twice 
function countUpCountUp(num) {
    const result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    return result;
}
console.log(countUpCountUp(4)); // Output: [1, 2, 3, 4, 1, 2, 3, 4]







//function take up a string of a sentence and return a new string 
//where the first letter is converted to an uppercase letter and the last 
//character has a period. using .charaAt().toUpperCase and slice(1)
function properSentence(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1);{
        if ( result.charAt(result.length - 1 ) !== "."){
            result += ".";
        }
        return result;
    }
}
console.log(properSentence("this is an example")); 





//function  array of numbers and resturns new array that contain only positive
//numbers using .Filter( a => a >= 0)

function onlyPositiveVibes(arr) {
    return arr.filter( a => a > 0);
}

console.log(onlyPositiveVibes([1, , -23, 44, -5, 2, 7, -4, 12])); // returns [1, 2, 7, 12]







//write a function that takes two arguments(Arr of string and just an array)
//using .includes()
function doesListHaveString(arr, str) {
    return arr.includes(str)
};

console.log(doesListHaveString(["a", "b", "c"], "b")); // should return true
console.log(doesListHaveString(["a", "b", "c"], "d")); // should return false