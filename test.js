/////////////////////////////////////////////////////////////////////////
// [ .map() ] = Creates a new array
// [ .filter() ] = Create new array and checks 
// [ .push()] = push into main item. 
// [ .slice(x,y)] = get characters or range 
// [ .split("")] = organize via space 
// [ .includes() ] = check if includes item : for numbers .toString().includes("X")
// [ .startsWith() ] = begins with 
// [ .repeat()] = Repeats 
// [ .reduce()] = Iterate over each number in array for sum -> e((A,B) => {..}, 0);
// [ .push()] = Into a new box 
// [ switch arr spots ] =   [X[0], X[X.length - 1]] = [X[X.length - 1],X[0]];
// [ converts ] -> number to a string!!! --> let str = number + "";
// [ Math.sign()] = Check weather a number is positive or zero -> Math.sign(number) === 1,
// [ Math.floor(Math.random())] = random number 
// [ Random number ] = const X = max => Mathflor(MathRan() * max) + 1 = return x(num)
// [ remove Spaces  ] = return str.split("").filter( space => space !== " ").join("") 
// [ for (let X of str)] = checking lists in array
// [ return ] = X.length > 0 ? X : false; ---> condition ? expression1 : expression2
// [ square number ] = number ** 2
/////////////////////////////////////////////////////////////////////////


//5---4 

removeEmpty([12, undefined, 37, 53, undefined, 0]);
// [12, 37, 53, 0]