//{} and [] are similar, but not the same.




//How do you loop through arrays? Can you use them on objects? If you can, should you?While you technically can use array looping methods on objects (e.g., forEach), it's generally not recommended because objects are not inherently ordered like arrays. Using array looping methods on objects may not produce predictable results. 
let arr = [ 1, 2, 3, 4, 5]; 

for (let i =0; i < arr.length; i ++){
    console.log(arr[i])
}

//How do you loop through objects? Can you use them on arrays? If you can, should you?
let objl = { run:12, jay:22, sara:29};{
    for (let key in objl) {
        console.log(key,objl[key])
    }
}


//Example 2: Using an if statement with the loop for key/object
let obj = { a:1, b:2, c:3}; {
    for ( let key in obj){
        if (key === "c"){
            console.log(key + ":" + obj[key])
        }
    }
}


//How do you access values in objects? In arrays?

let companyAge = { abc:23, time:43, cisysports:3453};

console.log(companyAge.abc);
//using dot
console.log(companyAge["time"]);
//using string 





//If you need to find a value in an object, how do you do it if you have the key? How do you do it if you do not have the key?
let country = { usa:52, japan:65, canada:43};
let countryPopulation = Object.values(country);
console.log(countryPopulation)
//For the keys 
let countryA = { usa:52, japan:65, canada:43};
let countryPopulationA = Object.keys(country);
console.log(countryPopulationA)









//How do you tell the difference between objects and arrays using code?

let objac = {a: 1, b: 2, c: 3};
let arrac = [1, 2, 3];

console.log(typeof obj); // Output: object
console.log(Array.isArray(objac)); // Output: false

console.log(typeof arr); // Output: object
console.log(Array.isArray(arrac)); // Output: true
