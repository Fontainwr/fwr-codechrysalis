////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//let runners = [
    // {
    //     name: "Sam",
    //     seconds: 1322.728
    // },
// // Function to calculate average time of all runners
// =======================================================================================
//     let totalSeconds = runners.reduce((sum, runner) => sum + parseFloat(runner.seconds), 0);
//     return totalSeconds / runners.length;
//
//
// // Function to find the winner (runner with the lowest time)
// =======================================================================================
//     let winner = runners.reduce((prev, current) => (parseFloat(prev.seconds) < parseFloat(current.seconds)) ? prev : current);
//     return winner.name;

// // Function to calculate total time of Something  (time taken by the slowest runner)
// =======================================================================================
//     let totalTime = Math.max(...runners.map(runner => parseFloat(runner.seconds)));
//     return totalTime;
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// [ .abs() ] = check distance to a number = Math.abs(num1 - 10);
// [ .charAt() ] = Select the character at a position.
// [ .concat() ] = To repeate string again
// [ .endsWith() ] = Cehcks what begins with X
// [ .filter() ] = Create new array and checks
// [ .find(X, index) ] = find the element you need --> [ arr.find(element => element > 10) ];
// [ .floor(Math.random()) ] = random number.
// [ .forEach()] =  iterate over  array --> arr.forEach(word => if(){console.log}
// [ .includes() ] = check if includes item : for numbers .toString().includes("X")
// [ .map() ] = Creates a new array -->  arr.map(set => set ).filter( num => num > 0);
// [ Math.abs() ] = check distance to a number = Math.abs(num1 - 10);
// [ Math.floor(Math.random()) ] =  return Math.floor(Math.random() * num);
// [ Math.sign() ] = Check weather a number is positive or zero -> Math.sign(number) === 1,
// [ Math.round() ] = returns the value of a number rounded to the nearest integer.
// [ .push() ] = Into a new box
// [ .push() ] = push into main item.
// [ .toString ] =  Converts str into number -->  return num.toString().includes('0');
// [ parseInt()] =  Convert boolean result back to number ->   return parseInt(num.toString().includes('0'))
// [ .reduce() ] = sum of array -> number.reduce((sum,num) => { return sum + num}, 0);
// [ .reverse() ] = reverse the array(first -> last/last -> first) = arr.reverse();
// [ .repeat()] = Repeat a something X amount of times 
// [ /[a-z].test(X)] = Test regex if true based on info code. 
// [ .slice(x,y) ] = get characters or range ---> or cur one item = X.slice(2)
// [ .slice(X)] = Remove character.
// [ .split("") ] = organize via space....You may need to [ .join("") ] it back
// [ .startsWith("") ] = Cehcks what begins with X
// [ Typeof ] = typeof str.charAt(0) === "string"....includes string -->typeof str.includes("string")

//============================================================================================

// [ add arr nums ] = for ( let i = 0; i < arr.length; i++){const num = arr[i];if( numn > 0 && um % 10 !== 5) {sum += num ;
// [ count number ] = for ( let i = 0; i < arr.length; i++) if ( arr[i] === 2)
// [ count up ] =  let result = []. for (let i = 1; i <= arr; i++) ---> result.push(i)--> return result 
// [ check all String if contains ] = return str.length === 1 && /[a-zA-Z]/.test(str);
// [ check last -numbr ] = for ( let i = arr.length - 1; i >= 0; i--) if (arr[i] < 0)..return
// [ Arr-to-Obj ] = let num = []...for(let item of arr)...if(typeOf item === "number"){num.push(item)}..return {num,...}
// [ for of loop ] = (let X of str) = checking lists in array
// [ Get middle item in array ] = return arr[Math.round((arr.length -1) / 2)]
// [ Get whole number ] =  min = Math.ceil(n1); min = Math.floor(n2); return Math.floor(Math.random() * (max - min + 1)) + min
// [ Get item in arr] = return str.split(" ").filter(word => word.length > 1).map(word => word.charAt(0))[1];
// [ Loop ] = ( let i = 1; i <= X ; i++ ) // or // ( let i = 1; i <= X.length; i++ )
// [ Return Object ] = Return obj[key]
// [ Retrun specific character ] = return str.split(" ")[0][2]
// [ Convert arr -> obj ] =  let obj = {}..for (let i = 0; i < arr.length; i += 2 )..obj[arr[i]] = arr[i + 1]
// [ reverse count from end ] =  return array.slice(-number).reverse();
// [ Random to letters ] = (let i = 0; i < num; i++)-- result += X[Math.floor(Math.random() * X.length)]
// [ Random Number ] = return Math.floor(Math.random() * num) + 1;
// [ remove Spaces ] = return str.split("").filter( space => space !== " ").join("")
// [ remove Item] = return X.map( A => A !== undefined ? A : null ).filter( Done => Done !== null)
// [ square number ] = arr.map(num => num ** 2).filter(result => result);
// [ search str for letters ] = return str.split(" ").map( letter => x.slice(1,3) === "oo").includes(true)
// [ switch arr spots ] = if(x.len >= X) ---> [X[0], X[X.length - 1]] = [X[X.length - 1],X[0]]; --> return arr
// [ to retrive character ] =  return str.split(" ")[1][0]; = "Second" character and "First" character.
///////////////////////////////////////////////////////////////////////////////////////////////

// $7 - #1 