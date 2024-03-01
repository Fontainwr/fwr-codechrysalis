// January 31, DOM 



//function if statement basics.
function lessen(num) {
    if ( num === 0 ){
        return 0;
    }else if (num > 0) {
        return num - 1;
    } else {
        return num +1 
    }
    return num 
}

console.log(lessen(4)); // should return 3
console.log(lessen(-2)); // should return -1
console.log(lessen(0)); // should return 0
console.log(lessen(0.5)); // should return -0.5