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





//Objects and items 

let items = [ 
    "grilled Cheese",
    400,
    ["Anime","Other"]
];

console.log(`We have ${item[0]} and it costs about ${item[1]}, and we will bring ${item[3]}`)









//get item based on KEY and VALUES 
let item = {
    name: "Grilled Cheese",
    price: 400,
    allergens: ["Anise", "Other"]
};

console.log(`We have ${item.name} and it costs about ${item.price}, and we will bring ${item.allergens.join(' and ')}.`);






//using Object.key and Object.values 
let data = {};
data["a"] = 34324231; 
data["b"] = 122222; 
data["c"] = 123; 
data["d"] = 12; 
console.log(Object.keys(data))
console.log(Object.values(data))



//Function counts string and returns ojbect that count the occurences for 
//each letter 
function countLetter(str){
    let counter = {};
    for (let i = 1; i < str.length; i++){
        let letter = str[i] ;
    if (counter[letter] === undefined){
        counter[letter] = 1; 
    } else {
        counter[letter]++
        }
    }
    return counter;
}
console.log(countLetter("rejwenfrekrekj"))






//function remove Repeats that takes an array of strings 
//returns a new array. 

function removeRepeats(arr){
    let newArray = {};
    for (let i = 0; i < arr.length; i++) {
        newArray[arr[i]] = true;
    }
    return Object.keys(newArray);
}
console.log(removeRepeats(["a", "b", "c", "b", "a", "d"]));









//Write a function that takes a string and returns a lookup 
//object that counts the number of each vowel (a, e, i, o, u).

function countVowels(str) {
    let vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    let strLowerCase = str.toLowerCase();

    for (let char of strLowerCase) {
        if (vowels.hasOwnProperty(char)) {
            vowels[char]++;
        }
    }

    // Remove vowels with count 0
    for (let vowel in vowels) {
        if (vowels[vowel] === 0) {
            delete vowels[vowel];
        }
    }

    return vowels;
}

console.log(countVowels("digging for apples")); 
// Output: { "i": 2, "o": 1, "a": 1, "e": 1 }




//Write a function that takes an array of strings. 
//It should return true if the array contains duplicate 
//copies of a string and return false if all the strings are unique.
function hasDuplicateStrings(arr) {
    let stringMap = {};
    
    for(str of arr){
        if(stringMap[str]) {
            return true;
        } else {
            stringMap[str] = true;
        }
    } 

    return false; // No duplicates found
}

console.log(hasDuplicateStrings(["apple", "banana", "apple"])); // Output: true
console.log(hasDuplicateStrings(["apple", "banana", "orange"])); // Output: false










//function to return a string with spaces in between.
function kerningLoop(str) {
    let spaceTop = "";

        for ( let i = 0; i < str.length; i++) {
            spaceTop += str[i];
        
        if (i !== str.length - 1) {
            spaceTop += " ";
        }
    }
    return spaceTop;
}
console.log(kerningLoop("cat"));






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










//Objects for storing items and retrieveing info
let books = [
    {
        title: "Cat in the Hat",
        author: "Dr. Seuss",
        wordCount: 1621
        },
        {
        title: "Where's Waldo",
        author: "Martin Handford",
        wordCount: 0
        },
        {
        title: "Lord of the Flies",
        author: "William Golding",
        wordCount: 59900
        }
    ];


    let totalWords = 0; 

    for ( let i = 0; i< books.length; i++){
        totalWords += books[i].wordCount;
    }

    console.log("There are a total of " + totalWords + " words in these books.");






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




    



//using objects 
let movies = [
    {
        title: "Star Wars",
        year: 1977,
        length: 121,
        blackAndWhite: false
    },
    {
        title: "Citizen Kane",
        year: 1941,
        length: 119,
        blackAndWhite: true
    },
    {
        title: "We Bought a Zoo",
        year: 2011,
        length: 124,
        blackAndWhite: false
    },
    {
        title: "The Wizard of Oz",
        year: 1939,
        length: 102,
        blackAndWhite: false
    },
    {
        title: "The Matrix",
        year: 1999,
        length: 127,
        blackAndWhite: false
    }
];



//find total length of something 

let findTotalTime = () => {
    let totalMovieLength = 0;
    for ( let i = 0; i < movies.length; i++){
        let movie = movies[i];
        totalMovieLength += movie.length;
    }
    return totalMovieLength;
}

console.log(findTotalTime())



//find count Color Films that are black and white
let findColorFilms = () => {
    let totalColorFilms = [];
    for ( let i = 0; i < movies.length; i++){
        let movie = movies[i];
    if (movie.blackAndWhite) {
        totalColorFilms.push(movie)
        }
    }
    return totalColorFilms.length;
}
console.log(findColorFilms())



//find films before a data 
let findFilmsBefore = (years) => {
    let totaFilmsBefore= [];
    for ( let i = 0; i < movies.length; i++){
        let movie = movies[i];
    if (movie.year < years ) {
        totaFilmsBefore.push(movie)
        }
    }
    return totaFilmsBefore.length;
}
console.log(findFilmsBefore(1992))



//does film exist?  
let findFilms = (name) => {
    let weHave = false;
    for ( let i = 0; i < movies.length; i++){
        let movie = movies[i];
    if (movie.title === name ) {
        weHave = true; 
        break;
        }
    }
    return weHave;
}
console.log(findFilms("Star Wars"))











//loopup table using math . random 
let restaurants = [
    {
        name: "Olive Garden",
        cuisine: "Italian",
        rating: 4.2,
        hasDriveThru: false,
    },
    {
        name: "IHOP",
        cuisine: "American",
        rating: 3.1,
        hasDriveThru: false,
    },
    {
        name: "Panda Express",
        cuisine: "Chinese",
        rating: 4.0,
        hasDriveThru: true,
    }
];
  let pickRandomRestaurant = () => {
    let index = Math.floor(Math.random() * restaurants.length);
    let restaurant = restaurants[index];
    console.log("I have chosen the " + restaurant.name + " restaurant " + "becuase I like " + restaurant.cuisine + " types of food!");
    console.log("It has a review score of " + restaurant.rating);
    if (restaurants.hasDriveThru) {
      console.log("A drive-thru window is available");
    }
  };

pickRandomRestaurant();









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







//Basic function creation
let turnIntoQuestion = (sentence) => {
    if (!sentence.endsWith("?")) {
      sentence = sentence + "?";
    }
    return sentence;
  };

console.log(turnIntoQuestion("Where can I find the bathroom?"))






//Function order ( This will be [2,2].....if let foo = 2 --> [2,1])
let foo = 1;
let condition = true;
if (condition) {
    foo = 2;
    console.log(foo);
}
console.log(foo);















//Declare a function 'grab'.
//function that takes two inputs: an array of arrays and an index
//returns an array of the values stored at that index in each nested array.

const finalArray = []
function grab(arr, index) {
    for ( let i = 0; i < arr.length; i ++ ) {
        const indexLocation = arr[i];
        if (index >= 0 && index < indexLocation.length ) {
            const valueIndex = indexLocation[index];
            finalArray.push(valueIndex)
        }
        }
        return finalArray;
    }









    
//Repeat example
let message = "We are the the champions";
let repeatFiveTimes = message.repeat(5);
console.log(repeatFiveTimes)








//Tells you about a character has ot not has.
let messages = "We are the the champions.";
let lastCharacter = messages.slice(-1);
let period = lastCharacter === ".";
console.log(period)







//find distance and index 
let str = "Wfdgdsgdgsdfgedfkldaklfet";
let firstIndex = str.indexOf('e');
let distanceFromBeginning; 

if (firstIndex !== -1 ) {
    distanceFromBeginning = firstIndex + 1 ; 
} else {
    distanceFromBeginning = -1
};
console.log(distanceFromBeginning);









//find distance and index from end 
let string = "wkljkdfjkkdewr";
let lastIndex = string.lastIndexOf("e"); 
let distanceFromEnd;

if (lastIndex !== -1) {
    distanceFromEnd = string.length - lastIndex;
} else {
    distanceFromEnd = -1;
};

console.log(distanceFromEnd)








//check leapYear 
let name = "Fontain";
let year = 1981;
let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
    isLeapYear = true;
    } else {
    isLeapYear =  false;
    }

console.log(isLeapYear);








// Number range check
let min = 1024;
let max = 16384;
let number = 511000;
let inRange;

if (number > min && number < max) {
    inRange = "In range";
    } else {
    inRange = "Out of range";
}

console.log(inRange);









//If statement example 
let language = "japanese";

if ( language == "english"){
    console.log("Hello, cat")
} else if (language == "japanese"){
    console.log("Konichwa, neko")
} else if (language == "spanish"){
    console.log("Hola, Gato")
} else {
    console.log("Language not supported")
};







//While Loop 
let counter = 1; 
while (counter <= 20) {
    console.log(counter);
    counter += 1;
};







//while loop for numbers using array.
let number = [ 1,2,3,4,5]
let i = 0;
while (i<5){
    console.log(number[i]);
    i = i += 1;
}








//while loop desplay "X" dnumber of "X"
let result = "";
let count = 0; 

while (count < 40) {
    result += "E";
    count += 1;
}

console.log(result)









//While loop for to add empty string 

let num = 42;
let numAsString = num + "";
while (numAsString.length < 5) {
  numAsString = "0" + numAsString;
};
console.log(numAsString);








// while loop to count numbers in order 
let endNumber = 100; // change this to other numbers
let count = 1;
let total = 0;
while (count <= endNumber) {
  total = total + count;
  count = count + 1;
}
console.log(total);









//while check the number in the section and what placement.
//iterates.
let number = 195714002;
//convertts number to a string!!!
let str = number + "";
let count = 0;
let foundAnySevens = false;
while (count < str.length) {
    let individualCharacter = str[count];
    if (individualCharacter == "7") {
        foundAnySevens = true;
    }
    count = count + 1;
}
console.log(foundAnySevens);








//count how many "X" based on number 

let size = 5;
let row = "X";
while (row.length <= size) {
    console.log(row);
    row = row + "X";
}









//Count how many "word" in the sentence 
let sentence = "the rain in spain mainly falls on the plain";
let index = 0;
let numberOfThes = 0;
while (index < sentence.length) {
  if (sentence[index - 1] === "t" && sentence[index] === "h" && sentence[index + 1] === "e") {
    numberOfThes = numberOfThes + 1;
  }
  index = index + 1;
}
console.log("There are " + numberOfThes + " the(s) in this sentence.");










//while and if statement to count 
let number = 99;
let count = 0;
let total = 0; 

while ( count < number ){
    count = count + 3;
    total = count;
    console.log(total)
}  
if (total === 99) {
    console.log(100);
}








//html notes 
<p>Item #1</p>
<p class="foo" id="bar">Item #3</p>

p = p 
.foo = class 
#bar = id 

// text-decoration	= Can be used to underline text	text-decoration:
// underline text-decoration: none













//Arrays info to push and print total 

let numbers = [1, 2, 3, 4, 5, 6];
let i = 0;
let total = 0;
let list = []
while ( i < numbers.length) {
    total = total + numbers[i];
    i += 1;
    list.push(total);
};

console.log(total)
console.log(list);









//Functions basic setup 

let sayHello = () => {
    console.log("Hello! I'm a block of code")
}

sayHello();









//Using function basics 
let name = (name1, amount) => {
    if (amount === 1){
        return name1;
    } else {
        return name1 + "s"
    }
};

let amount = 14;
let message = "I have " + amount + name(" Worker", amount);

console.log(message);









//Function to see if even or odd 
let numbers = (num) => {
    if (num % 2 === 0 ) {
        return "Even"
    }else {
        return "Odd"
    }
}

console.log(numbers(13))








//Functions (find average)
let findAverage = (a, b) => {
    return (a + b) / 2;
    };
  console.log(findAverage(3, 6)); // shows 4.5












//function ( Number squared )
let square = (num) => {
    return num * num;
}
console.log(square(12))












//Funtion return last character of string 
let getLast = (str) => {
    let lastLetter = str.trim().charAt(str.length - 1);
    return lastLetter;
}
console.log(getLast("the"))




//Function asteriskCreator to create a string of asterisks:
function asteriskCreator(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += '*';
    }
    return result;
}

console.log(asteriskCreator(5)); // Output will be *****







//Function to see if even or odd 
let numbers = (num) => {
    if (num % 2 === 0 ) {
        return "Even"
    }else {
        return "Odd"
    }
}

console.log(numbers(13))








//go through array 
let name = ["jay", "sarah", "tier", "erwer"];
let i = 0;
while ( i<4){
    console.log(name[i]);
    i += 1;
}









//Add all number from array using for loop
let array = [1,2,3,4,5,6,7,8,9,10,11];
let findSum = (numbers) => {
    // WRITE YOUR CODE HERE.
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    };
    return sum 
};
console.log(findSum(array))








//function that finds the most common character in the string 
function findCommon(word) {
    let currentTotal = 0; 
    let bestCount = 0; 
    let bestLetter = word[0];
    for (let i = 0; i < word.length; i++){
        currentTotal = 0;
        for (let t = 0; t < word.length; t +=1 ) {
            if (word[t] === word[i]){
                currentTotal += 1;
            }
        }
        if(bestCount < currentTotal) {
            bestLetter = word[i];
            bestCount = currentTotal;
        }
    }
    return bestLetter
}


//or you can do this using undifined to find most used letter. 
let findMostCommon = (str) => {
    let counter = {};
    let bestLetter1 = undefined;
    for (let i = 0; i < str.length; i += 1) {
        let letter = str[i];
        if (counter[letter] === undefined) {
            counter[letter] = 1;
        }
        if (counter[letter] > counter[bestLetter1] || bestLetter1 === undefined) {
            bestLetter1 = letter;
        }
    }
    return bestLetter1;
}

console.log(findMostCommon("ujrfnjkfkfjknvf"));






//find average all number from array using for loop
let array = [1,2,3,4,5,6,7,8,9,10,11];
let findSum = (numbers) => {
    // WRITE YOUR CODE HERE.
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    };
    return sum / numbers.length;
};
console.log(findSum(array))








//function count up using FOR loop 
function countUp(num) {
    for ( let i = 1; i <=num; i++){
        console.log(i)
    }
}
countUp(5);





//function count up using FOR loop reverse text 
function reversePrint(array){
    let reverse = array.reverse()
    return reverse
}

console.log(reversePrint(["Almond Eye", "Efforia", "Equinox"]));





//for Loop countdown to number. 
let happyNewYear = () => {
    let countDown = 60;
    for (let t = countDown; t >= 1; t--){
        console.log(t);
    }
    return "Happy New Year!";
};
console.log(happyNewYear())







//for loops coutdown to text 

function countDown(num) {
    for(i = num; i >= 0; i--){
        console.log(i);
        if (i === 0){
        return "Blast Off";
        }
    }
}

console.log(countDown(100));







//for loops to add all arrays 
let array = (nums) => { 
    let total = 0; 
    for ( let i = 0; i < nums.length; i++){
        console.log(nums[i]);
        total += nums[1]; 
    } 

    return total; 
}

let nums = [ 1,2,3,4,5]
console.log(array(nums))








//Build a trinagle using a for loop function 

function buildTrinagle(num) {
    for ( let i = 1; i <= num; i++) {
        let trinagle = "* ";
        console.log(trinagle.repeat(i));
    }
}

buildTrinagle(10)





//function to return a string with spaces in between.
function kerningLoop(str) {
    let spaceTop = "";

        for ( let i = 0; i < str.length; i++) {
            spaceTop += str[i];
        
        if (i !== str.length - 1) {
            spaceTop += " ";
        }
    }
    return spaceTop
}
console.log(kerningLoop("cat"));





// While loops [ while something is something it does X when someting stops]
//for loops 
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1, 2, 3, 4, 5 (each on a new line)
}
//while loops 
let count = 5;
while (count > 0) {
    console.log(count); // Output: 5, 4, 3, 2, 1 (each on a new line)
    count--; // Decrementing count in each iteration
}










//remove item from a array and print all 
let names = ["jaerwy", "sarahrewgr", "rgwrg", "rgwtrgtrg"];

names.pop();
let i = 0;
while (i < names.length) {
console.log(names[i]);
i += 1;
};







//adding item to array 
let names1 = ["jaerwy", "sarahrewgr", "rgwrg", "rgwtrgtrg"];
let final = names1.push("tierofe");
console.log(final); // This will output the new length of the array after adding "tierofe"







//modify array 
let names12 = ["jaerwy", "sarahrewgr", "rgwrg", "rgwtrgtrg"];
names12[2] = "tgjefgrsgtrgrgrtgtrgtrger"
console.log(names12); // This will output the new length of the array after adding "tierofe"








//add an extra item to the array 
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
days.push("Friday", "Saturday", "Sunday")
console.log(days); // Displays all 7 days
















// join() to list all items in an array
let moons = ["Deimos", "Phobos", "Howard"];
// ADD YOUR CODE HERE
console.log(moons.join(", ")); // Should display Deimos and Phobos











// Return every other item in array 
let moons = [1,2,3,4,5,6,7,8,9,10];
// ADD YOUR CODE HERE
for ( let i = 0; i < moons.length; i += 2 ){
    console.log(moons[i])
}










