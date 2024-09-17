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
// [ Return between two numbers ] floor(.random() * (num2 - num1 + 1 )) + num1)
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

//9-8

Write a function called sometimesSum that takes in two numbers. Return the sum of the
two numbers, unless the sum is between 10 and 20. In that case, return the
string
"Forbidden number".
console.log(sometimesSum(1, 2)); // 3
console.log(sometimesSum(15, 2)); // Forbidden number
console.log(sometimesSum(20, 1)); // 21
Problem 8 (Intermediate)
Write a function called rightDownTheMiddle that takes an array of three arrays.
Each array will have three elements. Return a new array of just the middle elements from each
array.
console.log(rightDownTheMiddle([[1,2,3],[4,5,6],[7,8,9]]));
// [2, 5, 8]
Problem 9 (Intermediate)
Write a function called iCutItInHalf that takes in a string of an even length. Return a
new string that is only the second half of the string.
console.log(iCutItInHalf("Television")); // "ision"
console.log(iCutItInHalf("tomato")); // "ato"
console.log(iCutItInHalf("ConjoinedTwins")); // "edTwins