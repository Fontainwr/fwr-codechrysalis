//Return keywards and how it stops. Also, as mentioned above, the return keyword also stops a function from further executing. This means that if you have a return keyword in your for loop, the loop will terminate on the first go.

//example

function noReturn() {
    console.log('Print!');
}

let whatsMyReturn = noReturn();
console.log(whatsMyReturn);

//NOTE: let whatsMyReturn = noReturn(); calls the noReturn() function and assigns its return value to the variable whatsMyReturn. However, the noReturn() function doesn't explicitly return anything, so it implicitly returns undefined.Therefore, whatsMyReturn is assigned the value undefined.