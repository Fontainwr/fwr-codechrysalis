//dot notation = (directly in the object ) vs bracket notation(outside to then look at the direct object ). 


const object = {
    a: 1,
    b: 2,
    c: 3,
    key: 23,
    };

let key = "b";
let a = "c"; 

    console.log(object.key); // 23 
    console.log(object[key]); // 2
    console.log(object.a);  // 1
    console.log(object[a]); // 3