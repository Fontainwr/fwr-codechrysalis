////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// window.addEventListener("load", () => {
//     let button = document.getElementById("the-button");
//     let counterElement = document.getElementById("the-counter");
//     let resetButton = document.getElementById("reset-button");
    
//     button.addEventListener("click", () => {
//         totalCount += 1;
//         counterElement.innerText = totalCount;

//         localStorage.setItem("totalCount", totalCount.toString())
//     }); 

//     resetButton.addEventListener("click", () => {
//         totalCount -= 1;
//         counterElement.innerText = totalCount;
//         localStorage.setItem("totalCount", totalCount.toString())
//     })

//     counterElement.innerText = totalCount;
// });


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
//
//
//
//
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
//
//
//
//
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
//
//
//
//
//
//
//let runners = [
    // {
    //     name: "Sam",
    //     seconds: 1322.728
    // },
//
//
// // Function to calculate average time of all runners
// function averageTime(runners) {
//     let totalSeconds = runners.reduce((sum, runner) => sum + parseFloat(runner.seconds), 0);
//     return totalSeconds / runners.length;
// }

// // Function to find the winner (runner with the lowest time)
// function findWinner(runners) {
//     let winner = runners.reduce((prev, current) => (parseFloat(prev.seconds) < parseFloat(current.seconds)) ? prev : current);
//     return winner.name;
// }

// // Function to calculate total time of the race (time taken by the slowest runner)
// function totalTimeForRace(runners) {
//     let totalTime = Math.max(...runners.map(runner => parseFloat(runner.seconds)));
//     return totalTime;
// }
//
//
//
//
//
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// [ .abs() ] = check distance to a number = Math.abs(num1 - 10);
// [ .charAt() ] = Select the character at a position.
// [ .concat ] = To repeate string again
// [ .endsWith() ] = Cehcks what begins with X
// [ .filter() ] = Create new array and checks
// [ .find ] == find the element you need. arr.find(element => element > 10);
// [ .floor(Math.random()) ] = random number.
// [ .includes() ] = check if includes item : for numbers .toString().includes("X")
// [ .map() ] = Creates a new array
// [ Math.abs() ] = check distance to a number = Math.abs(num1 - 10);
// [ Math.floor(Math.random()) ] = random number.
// [ Math.sign() ] = Check weather a number is positive or zero -> Math.sign(number) === 1,
// [ .push() ] = Into a new box
// [ .push() ] = push into main item.
// [ .toString ] =  Converts str into number -->  return num.toString().includes('0');
// [ parseInt()] =  Convert boolean result back to number ->   return parseInt(num.toString().includes('0'))
// [ .reduce() ] = Iterate over each number in array for sum -> e((sum,num) => { A + B}, 0);
// [ .reverse() ] = reverse the array(first -> last/last -> first) = arr.reverse();
// [ /[a-z].test(X)] = Test regex if true based on info code. 
// [ .slice(x,y) ] = get characters or range ---> or cur one item = X.slice(2)
// [ .split("") ] = organize via space....You may need to [ .join("") ] it back
// [ .startsWith() ] = Cehcks what begins with X
// [ Typeof ] = Check type of item ---> typeof str.charAt(0) === "string"
//============================================================================================
// [ check all String if contains ] = return str.length === 1 && /[a-zA-Z]/.test(str);
// [ for of loop ] = (let X of str) = checking lists in array
// [ Get middle item in array ] = return arr[Math.round((arr.length -1) / 2)]
// [ Loop ] = ( let i = 1; i <= X ; i++ ) // or // ( let i = 1; i <= X.length; i++ )
// [ Random Number ] = return Math.floor(Math.random() * num) + 1;
// [ remove Spaces ] = return str.split("").filter( space => space !== " ").join("")
// [ remove Item in arr] = return X.map( A => A !== undefined ? A : null ).filter( Done => Done !== null)
// [ square number ] = arr.map(num => num ** 2).filter(result => result);
// [ switch arr spots ] = if(x.len >= X) ---> [X[0], X[X.length - 1]] = [X[X.length - 1],X[0]];
// [ to retrive character ] = X[1][0] = "Second" character and "First" character.
///////////////////////////////////////////////////////////////////////////////////////////////

// console.log()

let removeEmpty = (arr) => {
    return arr.map( check => check !== undefined ? check : null).filter( result => result !== null )
}

console.log(removeOdd([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]