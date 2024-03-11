//Feb 9th  DOM 


//[.filter to return positive numbers only ]
let positiveVibesOnly = (num) => {
    return num > 0;
};

let returnPositiveVibesOnly = (nums) => {
    return nums.filter(positiveVibesOnly);
};
console.log(returnPositiveVibesOnly([-5, 3, -45, 28, -1000, 7]));
// [3, 28, 7]



//Takes a number and an array and removes all items from the array
//that are greater than the number 

let removeGreaterThan = (num) => {
    
}