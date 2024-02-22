//callbacks = will run the function "sayHi" and return "Hi" each time but only console.log once!!! 


// function sayHi() {
//     console.log('Hello');
//     return 'Hi';
//     }
    
// let foo = sayHi();

// console.log(foo);
// console.log(foo);
// console.log(foo);
// console.log(foo);








//Example = baz, foo, bar, baz(foo) is called.
// Inside baz, 'baz' is logged to the console.
// Then, fn() is called, where fn is the foo function.
// Inside foo, 'foo' is logged to the console.
// Then, bar() is called.
// Inside bar, 'bar' is logged to the console.

// function foo() {
//     console.log('foo');
//     bar();
//     }

// function bar() {
//     console.log('bar');
//     }

// function baz(fn) {
//     console.log('baz');
//     fn();
//     }

// baz(foo);






//Example #2 Choice B  <---Correct, t correctly passes the getNumber function as an argument to invokeSomething, and invokeSomething then invokes this function.

//NOTE: Choice A does not work because it tries to invoke the getNumber function immediately and pass its return value as an argument to invokeSomething, which results in an error because the return value (5) is not a function.
function getNumber() {
    return 5;
    }
function invokeSomething(fn) {
        return fn();
    }
// invokeSomething(getNumber()); // Choice A
invokeSomething(getNumber); // Choice B