////////////////////////////////////////////////////////////////////////////////////////////////
// [ Function to Function ]
//=====================================
// let enumerate = (num, funct) => {
//     let result = [];
//     for ( let i = 1; i <= num; i++){
//         result.push(funct(i))
//     }
//     return result 
// };
// function square(numT) {
//     return numT * numT; 
// }
// console.log(enumerate(5, square)); // Output: [1, 4, 9, 16, 25]





// [ Function Every other letter post ] 
//========================================
// let letters = "abcdefghijklmnopqrstuvwxyz";
// let everyOther = (str) => {
//     return str.split("").map((word, index) => {
//         if ( index % 2 === 0 ){
//             return word;
//         } else {
//             return "";
//         }
//     }).join("")
// }
// console.log(everyOther(letters)); // acegikmoqsuwy





// [  random letters length of number ]
//=============================================
// let createGibberish = (num) => {
//     let result = ""
//     let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     for ( let i = 0; i < num; i++){
//         result += (letters.charAt(Math.floor(Math.random() * letters.length)) )
//     };
//     return result;
// }
// console.log(createGibberish(3)); // "QYV"
////////////////////////////////////////////////////////////////////////////////////////////////
// [ .map() ] = Creates a new array
// [ .filter() ] = Create new array and checks 
// [ .push() ] = push into main item. 
// [ .slice(x,y) ] = get characters or range 
// [ .split("") ] = organize via space....You may need to [ .join("") ] it back 
// [ .includes() ] = check if includes item : for numbers .toString().includes("X")
// [ .startsWith() ] = Cehcks what begins with 
// [ .repeat() ] = Returns a new string which contains the specified item (X) amount of times 
// [ .reduce() ] = Iterate over each number in array for sum -> e((A,B) => {..}, 0);
// [ .push() ] = Into a new box 
// [ .charAt() ] = Select the character at a position.  
// [ Math.sign() ] = Check weather a number is positive or zero -> Math.sign(number) === 1,
// [ Math.floor(Math.random()) ] = random number 
// [ check KEy, object ] = (key, obj) --- if (key.hasOwnProperty(obj) --- return key[obj]
//============================================================================================
// [ switch arr spots ] =   [X[0], X[X.length - 1]] = [X[X.length - 1],X[0]];
// [ Loop ] =  ( let i = 1; i <= X ; i++ ) // or //  ( let i = 1; i <= X.length; i++ ) 
// [ converts ] -> number to a string!!! --> let str = number + "";
// [ Random number ] = const X = max => Mathflor(MathRan() * max) + 1 = return x(num)
// [ remove Spaces  ] = return str.split("").filter( space => space !== " ").join("") 
// [ fo of loop ] =  (let X of str) = checking lists in array
// [ return conditions  ] = X.length > 0 ? X : false; ---> condition ? expression1 : expression2
// [ square number ] = number ** 2
// [ to retrive character ] = X[1][0] = "Second" character and "First" character. 
// [ Get middle item in array ] = return arr[Math.round((arr.length -1) / 2)]
///////////////////////////////////////////////////////////////////////////////////////////////


//#8---> 7 