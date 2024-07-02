////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [ .abs() ] = Math.abs(num1 - 10) // [ .charAt() ] // [ .concat()] // [ .endsWith() ] // [ .filter() ] 
// [ .find(X, index) ] = [ arr.find(element => element > 10) ]// [ .floor(Math.random()) ] // [ .forEach()]
// [ .includes() ] = .toString().includes("X") // [ .map() ] = arr.map(set => set ).filter( num => num > 0)
// [ Math.abs() ] = Math.abs(num1 - 10) // [ Math.floor(Math.random()) ] = Math.floor(Math.random() * num);
// [ Math.sign() ] = + or 0 -> Math.sign(number) === 1, // [ Math.round() ] // [ .push() ] = push into main item.
// [ .toString ] = num.toString().includes('0') // [ parseInt()] = bool to num -> parseInt(X.toString().includes('0'))
// [ .replace(/A/g, "@")][ .reduce() ] = sum of array -> number.reduce((sum,num) => { return sum + num}, 0); 
// [ .reverse() ] = reverse the array(first -> last/last -> first) = arr.reverse(); // [ .repeat()] //[.some()=>item===s.repeat()]
// [ .slice(x,y) ] // [ .slice(X)] = Remove character // [ .split("") ] = then  .join("") ] it back
// [ .startsWith("") ] // [ Typeof ] = typeof str.charAt(0) === "string"....includes string -->typeof str.includes("string")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// [ add arr nums ] = for(let i = 0; i < arr.length; i++){const num = arr[i];if( numn > 0 && num % 10 !== 5) {sum += num ;
// [ Average ] =const totalSeconds = runners.reduce((acc, runner) => acc + parseFloat(runner.seconds), 0); toalS / run.sec
// [ Count number ] = for ( let i = 0; i < arr.length; i++) if ( arr[i] === 2)
// [ Count up/Back count  ] =  return array.slice(0, number) /  return array.slice(arr.length -  num ).reverse()
// [ count up ] =  let result = []. for (let i = 1; i <= arr; i++) ---> result.push(i)--> return result 
// [ Check for duplicates ] = result = arr.some((val, i) => arr.indexOf(val) !== i)
// [ Convert Up/lower ] =  return str.split("").map( letter => if (letter === letter.toUpperCase)...
// [ check last - Numbr ] = for ( let i = arr.length - 1; i >= 0; i--) if (arr[i] < 0)..return
// [ Check nth item of arr "start" ] = if ( str === "start") {return arr.slice(0, num)}...else if {...}rtn arr.sli(-n).rev..
// [ for of loop ] = (let X of str) = checking lists in array
// [ Get middle item in array ] = return arr[Math.floor((arr.length -1) / 2)]
// [ Get middle item in array ] = let middleIndex = Math.floor((arr[0].length - 1) / 2);return arr.map(row => row[middleIndex]);
// [ Get whole num ] =  min = Math.ceil(n1); min = Math.floor(n2); return Math.floor(Math.random() * (max - min + 1)) + min
// [ Get item in arr] = return str.split(" ").filter(word => word.length > 1).map(word => word.charAt(0))[1];
// [ Return arr -> obj ] = let obj = {}/for(i=0;i<arr.len,i+=2}/letkey=arr[i]/letval=arr[i+1]/obj[key] = val/ retrn obj
// [ Retrn arr -> obj ] =letobj={nums:[],..}/(i=0;i<arr.len,i++})/if(typearr[i]==="number")..obj.num.push(arr[i]..rtn obj
// [ Return arr num-> obj ] =  return num.map(num => { return {vlaue:num, isPo: num>0, isLu: [..].includes(num)}})
// [ Return arr -> obj ] = letresutl=[]...arr.forEach(obj =>...push(obj.year)..return result. 
// [ Retrn ever-other ] =  str.split("").filter((word, index) => index % 2 === 0).join("").
// [ Return middle string ] =     let findTime = Math.floor((str.length - 1) / 2) + 1/ return str.slice(findTime);
// [ Retrun specific character ] = return str.split(" ")[0][2]
// [ Return str @#$ ] = return str.split("").map ( char => if (char === "H")...return char;  {}.join("")
// [ reverse count from end ] =  return array.slice(-number).reverse();
// [ Random letter using num ] = (let i = 0; i < num; i++)-- result += X[Math.floor(Math.random() * X.length)]
// [ remove Spaces ] = return str.split("").filter( space => space !== " ").join("")
// [ remove Item] = return X.map( A => A !== undefined ? A : null ).filter( Done => Done !== null)
// [ square number ] = arr.map(num => num ** 2).filter(result => result);
// [ search str for letters ] = return str.split(" ").map( letter => x.slice(1,3) === "oo").includes(true)
// [ switch arr spots ] = if(x.len >= X) ---> [X[0], X[X.length - 1]] = [X[X.length - 1],X[0]]; --> return arr
// [ to retrive character ] =  return str.split(" ")[1][0]; = "Second" character and "First" character.
//  if this  [?] ---> add this [:] ---> if not then this 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//console.log


// 4-9

3/8/24, 3:41 PM My Code Chrysalis
https://my.codechrysalis.io/view/cc-fnd-52/3809/ht0yaw4w61ng 1/4
JavaScript Exercise Set #4
Back to day view
日本語
▼
3/8/24, 3:41 PM My Code Chrysalis
https://my.codechrysalis.io/view/cc-fnd-52/3809/ht0yaw4w61ng 2/4
Problem 1 (Warmup)
Write a function called anyoneThere that takes in an array. If the array contains something,
return true . If it is empty, return false .
console.log(anyoneThere([1, 2, 3])); // true
console.log(anyoneThere([])); // false
Problem 2 (Warmup)
Write a function called getThird that takes in an array. Return the third item in the array. If
there is no third item, return "No item found."
console.log(getThird(["corn", "tomato", "broccoli"])); // "broccoli"
console.log(getThird(["corn", "pineapple"])); // "No item found."
Problem 3 (Warmup)
Write a function called mediumSizedOnly that takes in a number. If the number is between
10 and 100, return the number. Otherwise, return false .
console.log(mediumSizedOnly(5)); // `false`
console.log(mediumSizedOnly(18)); // `18`
Problem 4 (Warmup)
Write a function called togetherAtLast that takes in two strings and returns those strings
joined together with a space.
console.log(togetherAtLast("Hello", "world")); // "hello world"
Problem 5 (Warmup)
Write a function thisSparksJoy that takes in an array of numbers and returns a new array
with all the positive numbers from the original array.
console.log(thisSparksJoy([1, 2, -5, 7, -100])); // [1, 2, 7]
▼
3/8/24, 3:41 PM My Code Chrysalis
https://my.codechrysalis.io/view/cc-fnd-52/3809/ht0yaw4w61ng 3/4
g( p y([ , , , , ])); [ , , ]
Problem 6 (Basic)
Write a function called weighIn that takes in two strings. Return the string that is longer. If
they are the same, return both strings in an array.
console.log(weighIn("cat", "meow")); // "meow"
console.log(weighIn("mouse", "duck")); // "mouse"
console.log(weighIn("moose", "goose")); // ["moose", "goose"]
Problem 7 (Basic)
Write a function easterEggHunt that takes in a number and returns true if the number
contains a 0.
console.log(easterEggHunt(100)); // true
console.log(easterEggHunt(73)); // false
Problem 8 (Basic)
Write a function called getRandomInteger that takes in a number and returns a random
whole number between 1 and that number.
Problem 9 (Basic)
Write a function called getRandomIntegerInRange that takes in two numbers and returns a
random whole number between those two numbers.
Problem 10 (Basic)
Write a function called trimDownABit that takes in an array. Return a new array that
contains every other element from the original array (in other words, it skips every other
element).
console.log(trimDownABit([1, 2, 3, 4, 5, 6, 7])); // [1, 3, 5, 7]
Problem 11 (Intermediate)
Write a function called whatYear that takes in an array of objects. Each object will have a
key 'year'. Return an array of all of the years. Harder: The array should contain only unique
years sorted in order
▼
3/8/24, 3:41 PM My Code Chrysalis
https://my.codechrysalis.io/view/cc-fnd-52/3809/ht0yaw4w61ng 4/4
years, sorted in order.
console.log(whatYear([{year: 1982}, {year: 1975}, {year: 1934}]));
// [1982, 1975, 1934]
Problem 12 (Intermediate)
Write a function called properAddress that takes in a string of a name separated by a
space, and a title prefix (Mr., Dr. Mrs., etc.). Assuming that the last name of the person is the
last word in the string, return a string of their title plus last name separated by a space.
console.log(properAddress("Dr.", "Mortimer Bartholomew")); // "Dr. Bartholome
console.log(propertAddress("Mrs.", "Christine Marie Jenkins")); // "Mrs. Jenk
Problem 13 (Intermediate)
Write a function called tellMeQuickly that takes in a string. The string will contain words
separated by spaces. Return a new string containing only the first letter in each word.
console.log(tellMeQuickly("Hello, I am a cat")); // "HIaac"
Problem 14 (Intermediate)
Write a function called numJoiner Take in an array of arrays. Each inner array will contain
two numbers. Return an array of those numbers added together.
console.log(numJoiner([[1, 2], [3, 3], [5, 0]])); // [3, 6, 5]
Problem 15 (Intermediate)
Write a function called searchForTruth that takes in an array of values.
Return the number of times true appears in the array. However, this must include BOTH
booleans that are true, and strings that contain the word "true" somewhere within their
text.
▼