//Feburary 15th, 

// [ .map ] = New item
// [ .filter ] = check 
// [ .slice(x,y)] = greg a character  
// [ .split("")] = organize via space 
// [ .includes ] = includes item  
// [startsWith ] = begins with 
// [ .repeat] = Repeats 
// convertts number to a string!!! --> let str = number + "";
// [ Math.floor(Math.random())] = random number 



let sortingMachine = (arr) => {
    let nums = [];
    let bools = [];
    let str = [];

    arr.filter( item => {
        if(typeof item === "number"){
            nums.push(item)
        }
    })
};
console.log(sortingMachine([1, true, 5, "hello", -2, false, "goodbye"]));