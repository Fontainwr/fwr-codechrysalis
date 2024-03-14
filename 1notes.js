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








//Math.random() = To create random number
let randomBoolean = Math.random() < 0.5; 
console.log(randomBoolean);
//Math.floor(Math.random() ) = To create whole numbers 
let num = Math.floor(Math.random() * 5  );
console.log(num);


//Using Math random for a complete code 
let soups = ["Tomato", "Sour Cream", "Chicken Noodle"];
let randomSoup = soups[Math.floor(Math.random() * soups.length)];
console.log("The soup of the day is: " + randomSoup);






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





//Using math.random to return random number dice 
let dice = () => {
    return Math.floor(Math.random() * 6 ) + 1;
}
console.log(dice());



//Using math.random to return heas or tails
let coinToss = () => {
        if ( Math.floor(Math.random() < 0.5 )) {
            return "Heads";
        } else {
            return "Tails"
        }   
};
console.log(coinToss());



//Using math.random to return -s rnadom array
let arr = [1,2,3,4,5,6,7,8,9,10]
let pickRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(pickRandom(arr));










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







// There are three ways to declare a function. So far we've been using what's called fat arrow syntax. It has looked like this:
let makeFunnyNoise = () => {
    console.log("Toot toot!");
};


// Another way to create functions is by using the function keyword. It looks fairly similar:
let makeFunnyNoise = function() {
    console.log("Toot toot!");
};


// The third way to create a function is also by using the function keyword but in a slightly different order:
function makeFunnyNoise() {
    console.log("Toot toot!");
}







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










//function return first character [ charAt(0)]
let firstChar = (str) => {
    if (str.length === 0 ) {
        return " :)"
    } else {
        return str.charAt(0);
    }
}
console.log(firstChar("The main time "));
console.log(firstChar(""));






//function takes array and swaps first and last items in array
let swapEnds = (arr) => {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length -1 ], arr[0]]
    return arr;
}
console.log(swapEnds([1, 2, 3, 4, 5])); // Output: [5, 2, 3, 4, 1]
console.log(swapEnds(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
console.log(swapEnds(['a']));





//Takes a string longer than 100 characters using slice(,) + "..."
let previewText = (text) => {
    if( text.length > 100) {
        return text.slice(0,15) + "..."
    } else {
        return text
    }
}

console.log(previewText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")); // Output: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
console.log(previewText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in libero libero.")); // Output: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in libero lib..."







//Takes array of numbers and return an array of ojects using .map() and .includes 
function sign(number) {
    if (number > 0) {
        return 1;
    } else if (number < 0) {
        return -1;
    } else {
        return 0;
    }
}

let numberInfo = (numr) => {
    return numr.map(num => {
        return {
            value: num,
            isPositive: sign(num) === 1,
            isLucky: [7,8,13,42].includes(num)
        }
    })
};
console.log(numberInfo([5, -3, 8, 13, 0, 42])); 






//function takes array of numbers and returns that sum of all positive 
//that dont end in 5. 
let pickySum = (arr) => {
    let sum = 0; 
    for ( let i = 0; i < arr.length; i++){
        const num = arr[i];

        if( num > 0 && num % 10 !== 5) {
            sum += num ;
        }
    }
    return sum;
} 
console.log(pickySum([-2, -1, 0, 1, 2, 3, 4, 5, 3572905925]));
// returns 10 (because 1 + 2 + 3 + 4 is 10)















//write a function takes a string and returns true if the string 
// pass in is 1 character long and conatins a letter otherwise it returns 
//false for all strings that don't fulfill both of those requriements
//using [ .toUpperCase() ] and [ .toLowerCase ]. 

let isLetter = (let) => {
    return let.length === 1 && let.toUpperCase() !== let.toLowerCase();
}

console.log(isLetter('a')); // true
console.log(isLetter('A')); // true
console.log(isLetter('1')); // false
console.log(isLetter('ab')); // false




//Takes string and returns the first letter of the string 
function isLetterAgain(char) {
    return char.length === 1 && char.toUpperCase() !== char.toLowerCase();
}

let findFirstLetter = (str) => {
    for ( let i = 0; i < str.length; i++) {
        if ( isLetterAgain(str[i])){
                return str[i]
        }
    }
    return null
};
console.log(findFirstLetter("Thre ergwer fewfr "))







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









//using [ Arguments ] = it behaves like an array containing the argument 
//you used to call the function. 
function sumNum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumNum(1, 2, 3, 4, 5, 6)); // Output: 21


//You can aslo use [ ... ] for the parameters as well to resolve 

let sumNumt = (...num) => {
    let result = 0; 
    for ( let i = 0; i < num.length; i++ ){
        result += num[i]
    }
    return result; 
}

console.log(sumNumt(1, 2, 3, 4, 5, 6)); // Output: 21








//Scrabble game that checks letters. 
let letterPoints = {
    A: 1, B: 3, C: 3, D: 2, E: 1,
    F: 4, G: 2, H: 4, I: 1, J: 8,
    K: 5, L: 1, M: 3, N: 1, O: 1,
    P: 3, Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8, Y: 4,
    Z: 10,
};

function scoreCheck(word) {
    let totalPoints = 0; 
    for (let i = 0; i < word.length; i++){
        let letter = word[i].toUpperCase();
        if (letterPoints.hasOwnProperty(letter)) {
        //n JavaScript, the hasOwnProperty() 
        //method is a built-in method of the Object prototype. 
        //It is used to check if an object has a property with 
        //a specified name as its own property
        totalPoints += letterPoints[letter];
        }
    }
    return totalPoints;
}
console.log(scoreCheck("FEUDAL")); // --> 10
console.log(scoreCheck("DIOXIDE")); // --> 16
console.log(scoreCheck("AND")); // --> 4
console.log(scoreCheck("KWYJIBO")); // --> 26







// January 30


//Funtion that takes in an array and adds the ends but if only 1 
//number, it will print that number

function addTheEnds(arr) {
    if (arr.length === 0) {
        return 0; // If the array is empty, return 0
    } else if (arr.length === 1) {
        return arr[0]; // If there's only one number in the array, return that number
    }
    
    let result = arr[0] + arr[arr.length - 1]; // Initialize result outside the loop
    return result; // Return result outside the loop
}

console.log(addTheEnds([1, 3, 5])); // should return 6
console.log(addTheEnds([1, 3, 5, 43, 43])); // should return 6
console.log(addTheEnds([4])); // should return 4, not 8
console.log(addTheEnds([5])); // should return 4, not 8
console.log(addTheEnds([])); // should return 0



//Function speak fast that takes string and returns new string spaces 
//all removed 
function speakFast(str) { 
    let result = str.replace(/\s/g, "");
    return result;
}

console.log(speakFast("If you call in the next 10 minutes you can get the air freshener freeeee!"));





//function that counts up of positive numbers 
function countUp(num) { 
    let total = []
    for ( let i = 1; i <= num; i++){
        total.push(i)
    }
    return total; 
}
console.log(countUp(6)); // returns [1, 2, 3, 4, 5, 6])



//function that counts up by 2 of positive numbers 
function countUp(num) { 
    let total = []
    for ( let i = 1; i <= num; i += 2){
        total.push(i)
    }
    
    return total; 
}
console.log(countUp(6)); // returns [1, 2, 3, 4, 5, 6])





//funtion that counts twice 
function countUpCountUp(num) {
    const result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    return result;
}
console.log(countUpCountUp(4)); // Output: [1, 2, 3, 4, 1, 2, 3, 4]







//function take up a string of a sentence and return a new string 
//where the first letter is converted to an uppercase letter and the last 
//character has a period. using .charaAt().toUpperCase and slice(1)
function properSentence(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1);{
        if ( result.charAt(result.length - 1 ) !== "."){
            result += ".";
        }
        return result;
    }
}
console.log(properSentence("this is an example")); 





//function  array of numbers and resturns new array that contain only positive
//numbers using .Filter( a => a >= 0)

function onlyPositiveVibes(arr) {
    return arr.filter( a => a > 0);
}

console.log(onlyPositiveVibes([1, , -23, 44, -5, 2, 7, -4, 12])); // returns [1, 2, 7, 12]







//write a function that takes two arguments(Arr of string and just an array)
//using .includes()
function doesListHaveString(arr, str) {
    return arr.includes(str)
};

console.log(doesListHaveString(["a", "b", "c"], "b")); // should return true
console.log(doesListHaveString(["a", "b", "c"], "d")); // should return false









//for of loop 
let items = [ "apple", "banana", "canteloupe", "dog"];
for (let food of items) {
    console.log(food);
}








//for of loops [ let __ of "arr" ]

let bunnies = [ 
    "Flopsy",
    "Mopsy",
    "Cottontail",];

for ( let people of bunnies) {
    console.log("Hello, " + people);
}




//for of loop count letter in a word.
let word = "indivisibility";
let iClount = 0;
for ( let letter of word.split("")) {
    if ( letter === "i") {
        iClount += 1;
    }
}

console.log("The word " + word + " has " + "[" + iClount + "]" + " I's in it!" )





//for of loop to find average of a number array
let nums = [2,6,10,12,14,42,55,78,99];
let sum = 0;
for (let num of nums) {
    sum += num; 
};
console.log("The average is: " + sum / nums.length);






//for of loop to check the length of the word 
let charCount = (arr) => {
    let result = [];
    for ( let length of arr) {
        result.push(length.length);
    }
    return result;
}
console.log(charCount(["cat", "monkey", "hippopotamus"]));




//function using for of loop to count number of characters in each array
let charCountA = (arr) => {
    let result = [];
    for ( let count of arr){
        result += count.length;
    }
    return result;
}
console.log(charCountA(["cat", "monkey", "hippopotamus"])); // Output: [3, 6, 12]










//For of loop that counts the arrays
function sum(arr) {
    let total = 0;
    for ( let i of arr ){
        total += i;
    }
    return total; 
}
console.log(sum([1, 4, 2, 9])); // returns 16



//Counts number of spaces in string 
function countSpaces(str) {
    let result = 0; 
    for ( let space of str ){
        if ( space === " "){
            result += 1;
        }
    }
    return result; 
};
console.log(countSpaces("This is an example")); // returns 3




//function takes number and returns an array of numbers that count from 1 to that number 
function createNumberArray(num){
    let result = [];
    for ( let i = 1; i <= num; i++){
        result.push(i);
    }
    return result 
}
console.log(createNumberArray(5)); // returns [1, 2, 3, 4, 5])








//function if statement basics.
function lessen(num) {
    if ( num === 0 ){
        return 0;
    }else if (num > 0) {
        return num - 1;
    } else {
        return num +1 
    }
    return num 
}

console.log(lessen(4)); // should return 3
console.log(lessen(-2)); // should return -1
console.log(lessen(0)); // should return 0
console.log(lessen(0.5)); // should return -0.5










//function using for of loop to count number of "o" in each character 
//going into and array --> and looking at a word 
// string of arr -----> then!!!! -----> word of string 
let oCount = (arr) => {
    let result = 0;
    for( let string of arr) {
        for ( let word of string){
            if(word === "o") {
                result++
            }
        }
    }
    return result;
}
console.log(oCount(["cat", "monkey", "hippopotamus"]));
// Output: 3 (because monkey has 1 o and hippopotamus has 2 o's)); // Output: [3, 6, 12]





//Dom element access children 

//1.) document.head.children =<head>[title, link, style]</head>
//2.) document.head.children[0] = <head>[<title>"next"<title>]</head>
//3.) document.head.children[0].innerText = <head>[<title>"NEW"<title>]</head>

//NOTE: [ .childNodes ] = Listed of all nested items.
//NOTE: [ .children ] = Listed just the tag elements.

//document.getElementById(nameOfId) = Search id=""
//document.getElementByClassName(nameOfClass)  = Search class=""
//document.getElementsByTagName("p") = All paragraph 



<body>
  <h1 id="page-title">Hello</h1>
  <article>
    <p class="fact">America is a country</p>
    <p>It is filled with many states</p>
    <div>
      <p id="shape-declaration">This is a list of the states shaped like rectangles:</p>
      <ul id="state-list">
        <li>Wyoming</li>
        <li>Colorado</li>
      </ul>
    </div>
    <p class="fact">
      Some states like Kansas, North Dakota, and New Mexico, are almost
      shaped like rectangles.
    </p>
    <p class="fact">
      America's favorite food is pizza.
    </p>
  </article>
  <script src="code.js"></script>
</body>



// Function to change the title of the HTML document
function changeTitle(str) {
    let pageTitle = document.getElementById("page-title");
    pageTitle.innerText = str;
}

// Function to get a list of states shaped like rectangles
function getRectangleStates() {
    let shapeDeclaration = document.getElementById("shape-declaration");
    let stateList = shapeDeclaration.nextElementSibling.children;
    let rectangleStates = [];
    for (let li of stateList) {
        rectangleStates.push(li.innerText);
    }
    return rectangleStates;
}

// Function to get a list of facts from elements with class="fact"
function getFacts() {
    let factElements = document.getElementsByClassName("fact");
    let facts = [];
    for (let element of factElements) {
        facts.push(element.innerText);
    }
    return facts;
}

// Function to change the list of states
function changeStateList(newList) {
    let stateListItems = document.getElementsByTagName("li");
    for (let i = 0; i < stateListItems.length; i++) {
        stateListItems[i].innerText = newList[i];
    }
}




//Create a "p" to change "p"
let newPharagraph = document.createElement("p");
newPharagraph.inerText = "Hello! This is a pargraph";
document.body.append(newPharagraph); 



// .childNodes returns a list of all DOM nodes that belong to this 
//parent.

// .children returns a list of all the DOM elements that belong to 
//this parent (remember that an Element is a tag and a node is anything in the document, such as Elements, text, etc)


//,fistChild and .lastChild and .removeChild  cna be used as well. 







//accessing an object using [ .THIS ] 
let person = {
    name: "Fontain",
    greet: function() {
      // 'this' is not a normal variable. It is automatically defined.
      console.log("Hello, my name is " + this.name);
    },
  };
  
  person.greet(); // --> Hello, my name is Blake






  
//DOM  Create a new button element
let newButton = document.createElement("button");
newButton.innerText = "Push";

//DOM Append the button to the body element
document.body.appendChild(newButton);


// Create a click event listener for the button
newButton.addEventListener("click", function() {
    // Remove the button from the DOM
    document.body.removeChild(newButton);
    // Or, you can remove the button using the parent node
    // newButton.parentNode.removeChild(newButton);
});




//Example of DOM add and remove 


//HTML 
// <ul id="itemList">
// <li>A</li>
// <li>B</li>
// <li>C</li>
// </ul>
// <input type="text" id="addItemInput">
// <button onclick="addItem()">Add</button>
// <button onclick="removeItem()">Remove</button>

function addItem() {
    let inputText = document.getElementById("addItemInput").value;

    if (inputText.trim() !== "") {
        let newItem = document.createElement("li");
        newItem.innerHTML = inputText;
        document.getElementById("itemList").append(newItem);
        document.getElementById("addItemInput").value = "";
    }
}

function removeItem() { 
    lastItem = document.getElementById("itemList").lastElementChild;
    if(lastItem !== null) {
        document.getElementById("itemList").removeChild(lastItem)
    }
}













//Methods = another name for a function that specifically for a function that are members of an object. 
//we access them using [ THIS ] 

let sayGreeting = function() {
    console.log(this.sound + ", I am a " + this.kind);
};

let animal = {
    kind: "Dragon",
    sound: "RAARARAR!",
    greet: sayGreeting,
};

animal.greet(); //this helps it find the location -.







//OBject robot using methods 
let robot = { 

    speak: function(){
        console.log("Hello")
    },
    
    sleep: function(){
        console.log("Good night!")
    },

    wakeUp: function(){
        console.log("Good morning!")
    },

    work: function(){
        console.log("Working...")
    }

};

let startRobot = (robot) => {
    robot.speak();  // Output: Hello
    robot.sleep();  // Output: Good night!
    robot.wakeUp(); // Output: Good morning!
    robot.work();   // Output: Working...
}
startRobot(robot);









//function bank account using objects 
let opneBankAccount = (name) => {
    return {
        name: name,
        balance: 0
    };
}
let account = opneBankAccount("Zeke");
console.log(account)







//function bank account using objects and function inside and accessing it 
//via [ This ] 
let opneBankAccount1 = (name) => {
    return {
        name: name,
        balance: 0,
        withdraw: function(num) {
            this.balance -= num 
        },
        deposit: function(num) {
            this.balance += num
        },
        checkStatus: function() {
            console.log(`Hello ${this.name}, Your current balance is ${this.balance}`)
        }
    };
}
let account1 = opneBankAccount1("Zeke");
console.log(account1.balance); // Expect 0

account1.deposit(300);
console.log(account1.balance); // Expect 300

account1.withdraw(120);
console.log(account1.balance); // Expect 180

account1.checkStatus();







//DOM using [ .addEventListener() ] using two areguments. 
//1.) string tells DOM what event to look for 
//2.) Function for the DOM to run when the even occurs

let button = document.getElementById("push");
let action = () => {
    console.log("Hello World team")
};
button.addEventListener("click", action )


//Another common use case of events is the window load event.
//  This is used frequently because the browser can run the 
//JavaScript first before the HTML file is fully loaded. 
//If JavaScript tries to run DOM methods on elements that haven't 
//been created yet, the JavaScript might not work.

window.addEventListener("load", () => {
    console.log("The HTML is now completely loaded in the browser.");
});







//Example of using DOM of creating a buton clicker with event listener
//with using arrow up/down key function. 

let counterClick = 0; 

function clickHandle() {
        counterClick++
        updateButtonText();
};

function updateButtonText() {
    document.getElementById("push").innerText = counterClick;
}

function handleArrow(event) {
    if( event.key === "ArrowUp") {
        counterClick++;
        updateButtonText();
    } else if (event.key === "ArrowDown"){
        counterClick--;
        updateButtonText();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("push").addEventListener("click", clickHandle);
    document.addEventListener("keydown", handleArrow);
})






//example of weather app 
<div class="container">
<div class="news-section">
    <h2>Latest News</h2>
    <ul id="news-list"></ul>
</div>
<div class="weater-section">
    <h2>Weather Forcast</h2>
    <div id="weather-info"></div>
</div>
</div>

// Fetch news headlines and display them
function fetchAndDisplayNews(topic) {
    dataSource.getNews(topic)
        .then(news => {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = ''; // Clear previous news items
            news.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.title;
                newsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

// Fetch weather information and display it
function fetchAndDisplayWeather(city) {
    dataSource.getWeather(city)
        .then(weather => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.textContent = `Current Temperature: ${weather.temperature}°C`;
            const forecast = document.createElement('p');
            forecast.textContent = `Next 24 Hours - Temperature: ${weather.forecast[0]}°C, Rainfall: ${weather.forecast[1]} mm`;
            weatherInfo.appendChild(forecast);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}
// Enable test mode
dataSource.enableTestMode();
// Display news headlines
fetchAndDisplayNews('business');
// Display weather information
fetchAndDisplayWeather('tokyo');








//example of creating DOM with code to count pharagraph. 

<button id="add-thing">Push Me</button>
<div id="a-div-tag"></div>


window.addEventListener("load", () => {
    // Add your code here!
    let counter = 1
    const button = document.getElementById("add-thing");
    const divLocation = document.getElementById("a-div-tag")

    button.addEventListener("click", () => {
        const newP = document.createElement("p")
        newP.innerText = "Creating a New Paragraph #: " + counter + "!"
        counter ++;
        
        divLocation.append(newP);
    })
  });










  //change background color using DOM 
  <body>
  </body>

  window.addEventListener("load", () => {
    function changeBackgroundColor() {

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
    changeBackgroundColor();

    document.addEventListener("mouseup", changeBackgroundColor );
    document.addEventListener("mousedown", changeBackgroundColor );
});






//DOM to change the color and size of items 

<body>
    <div id="message">I am important.</div>
    <button id="button">Make MORE important</button>
</body>

window.addEventListener("load", () => {
    let message = document.getElementById("message");
    let button = document.getElementById("button");
    let clickCount = 0; 

    button.addEventListener("click", () => {
        let currentSize = window.getComputedStyle(message).getPropertyValue('font-size');
        let newSize = parseFloat(currentSize) + 2;
        message.style.fontSize = newSize + "pt";

        const red = Math.floor(Math.random() * 256);
        const blue = 0;
        const green = 0;

        message.style.color = `rgb(${red},${green},${blue})`;

        clickCount++;

        if (clickCount === 2){
            document.body.style.backgroundColor = "yellow";
        } else if (clickCount === 4) {
            document.body.style.backgroundColor = "black";
        } else if (clickCount === 8) {
            document.body.style.backgroundColor = "green";
        }

        });
    });









    
//Loops using timeouts //Count up and does not stop 
let wakeUpCall = () => {
    console.log("Wake up!")
};
let delay = 8 * 60 * 80 * 1000; 
setTimeout(wakeUpCall, delay);


//[setTimeout]
let count = 0; 
let countUp = () => {
    console.log(count);
    count++;
    setTimeout(countUp, 100);
}
setTimeout(countUp,100)





//Loop counts 1 to 10 using for or while loop 
let counts = () => {

    let count = 1;
    while ( count <= 10){
        console.log(count)
        count++;
    }
};
counts();





//Prints hello every 5 seconds 
let hello5 = () => {
    console.log("Hello");
};
let delay = 500;
setTimeout(hello5, delay);






//Prints hello1, 2, 3
let count = 1;

function displayHello() {
    if ( count <= 12)
    console.log(`Hello ${count}`)
    count++;
    setTimeout(displayHello, 500);

    if( count === 13){
        console.log("Done!")
    }
}
displayHello();











//using [setTimeout ]
<div id="message">...Ready!.</div>


window.addEventListener("load", () => {
    let message = document.getElementById("message");
    let button = document.getElementById("button");
    
        let counter = 0;
    
        let updateMessage = () => {
        counter += 1;
        message.innerText = counter + " and counting!";
        setTimeout(updateMessage, delay);
        };
        let delay = 3000;
        setTimeout(updateMessage, delay);
    });


















//Function thats checks if array contains numbers or not. 
function anyoneThere(arr){
    if( arr.length === 0 ){
        return false;
    } else {
        return true;
    }
}
console.log(anyoneThere([1, 2, 3])); // true
console.log(anyoneThere([])); // false







//function returns third item array 

function getThird(arr) {
    if(arr.length >= 3 ) {
        return arr[2];
    }else {
        return "Item not found!"
    }
};
console.log(getThird(["corn", "tomato", "broccoli"])); // "broccoli"
console.log(getThird(["cat", "elephant", "Tiger", "Wale"])); // "broccoli"
console.log(getThird(["corn", "pineapple"])); // "No item found." 









//re format functions 
let double = (num) => {
    return num * 2;
};
console.log(double(2));

//or 
let doubleAgin = (num) => num * 2; 
console.log(double(2));








//[ .map() ] = like Array.map(X) = Takes in a function that is able to 
//convert one value into a new value. Creates a new array. Calls that function for every 
//item in the array and pushes thse new items to the array. 

//Example #1 = double numbers 
let nums = [1,2,3,4,5,6,7,8,9];

let double = (x) => {
    return x * 2; 
};

let evenNums = nums.map(double);
console.log(evenNums);




//Example #2 = clear spaces 
let string = ["  Hello","  How are you", " Take care "];

let hedger = (arr) => {
    return arr.trim("");
};

let newString = string.map(hedger);
console.log(newString);



//[ .filter() ] = It takes in a function and returns a new array.
//the function should return a boolean. The new array, will keep 
// the value if the boolean is true. 

//Example #1 = return psotive numbers 
let isPositive = num => {
    return num > 0; 
};

let justPositive = (nums) => {
    return nums.filter(isPositive);
};
console.log(justPositive([12,-12,34,-23,-231,23,4,-111,-42,423]));





//function no blanks that takes array of string 
//some of the string might be mpty (string that have length = 0)
//Return a new array of string that doesn't contain any empty string 

function noBlanks(arrayOfStrings) {
    return arrayOfStrings.filter(str => str.length > 0);
}

// Example usage:
let strings = ["", "Hello", "", "How are you", "", "Take care"];
let nonEmptyStrings = noBlanks(strings);


console.log(nonEmptyStrings); // Output: ["Hello", "How are you", "Take care"]








//[.filter to return positive numbers only ]
let returnPositiveVibesOnly = (num) => {
    return num > 0;
}

let finalPositiveVibes = (nums) => {
    return nums.filter(returnPositiveVibesOnly)
}
console.log(finalPositiveVibes([-5, 3, -45, 28, -1000, 7]));
// [3, 28, 7]






//Takes a number and an array and removes all items from the array
//that are greater than the number 



let removeGreaterThan = (num, arr) => {
    return arr <= num;
}

let getFinalRemove = (num, newarr) => {
    return newarr.filter( n => removeGreaterThan(num, n ));
}
console.log(getFinalRemove(3, [1, 2, 3, 4, 5, 6]));
// [1, 2, 3]

console.log(getFinalRemove(5, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [1, 2, 3, 4, 5]











//Write a function called upCaseList that takes in an 
//array of strings and converts each string to uppcase 

let upcaseList = (arr) => {
    return arr.map( word => word.toUpperCase());
}


console.log(upcaseList(["hey", "wake", "up"]));
// ["HEY", "WAKE", "UP"]










// function takes in an arrayof strings, return new longer than 8 

let checkWords = (word) => {
    return word.length >= 8;
}
let longWordsOnly = (arr) => {
    return arr.filter( word=> checkWords(word))
};
console.log(longWordsOnly(["a", "be", "sea", "D", "eeeeeeeeee", "yodelaheehoo", "heeeeeeeee"]));
// ["eeeeeeeeee", "yodelaheehoo", "heeeeeeeee"]










//Write a function square array of numbers 
let squareList = (arr) => { 
    return arr.map( num => num ** 2 )
};
console.log(squareList([1, 2, 3, 4]));
// [1, 4, 9, 16]





//Functuion removeEmpty array
// values and removes all undefined values 

let remove = (num) => {
    if( num === undefined){
        return false;
    }
    return true;
}
let removeEmpty = (arr) => {
    return arr.filter( n => remove(n) )
}
console.log(removeEmpty([12, undefined, 37, 53, undefined, 0]));
// [12, 37, 53, 0]





//[ review .map() and Filter ]
//Write a function takes in an array string and returns
//new array where all the words have upper case 

let shout = (arr) =>{
    return arr.map( word => word.toUpperCase())
}
console.log(shout(["a", "be", "sea", "D", "eeeeeeeeee", "yodelaheehoo", "heeeeeeeee"]));
// "A", "BE", "SEA", "D", "EEEEEEEEEE", "YODELAHEEHOO", "HEEEEEEEEE"]






//[ review .map() and Filter ]
//return all uppcase for words longer than 7. 
let yodel = (arr) => {
    if( arr.length >= 7) {
        return arr.map( word => word.toUpperCase());
    } else {
        return [];
    }
};
console.log(yodel(["a", "be", "sea", "D", "eeeeeeeeee", "yodelaheehoo", "heeeeeeeee"]));
// "EEEEEEEEEE", "YODELAHEEHOO", "HEEEEEEEEE"]






//returns a copy of the string but with the following transformations applied:
let obfuscate = (str) => {
    return str.split("").map(char => {
        if (char === 'A' || char === 'a') {
            return '@';
        } else if (char === 'E' || char === 'e') {
            return '3';
        } else if (char === 'I' || char === 'i') {
            return '!';
        } else if (char === 'O' || char === 'o') {
            return '0';
        } else if (char === 'S' || char === 's') {
            return '5';
        } else {
            return char;
        }
    }).join("")

};
console.log(obfuscate("HELLO")); // H3LL0














//returns string of every other letter
let everyOther = (str) => {
    return str.split("").filter((word, index) => index % 2 === 0).join("")
}
let letters = "abcdefghijklmnopqrstuvwxyz";
console.log(everyOther(letters)); // acegikmoqsuwy


//Has a string and returns new stitng where the casing of all 
//letters has been swapped
let swapCase = (str) => {
    return str.split("").map((letter) => {
        if( letter === letter.toUpperCase()){
            return letter.toLowerCase();
        } else if (letter == letter.toLowerCase()){
            return letter.toUpperCase();
        }
    }).join("")
}
console.log(swapCase("abcxyz")); // ABCXYZ
console.log(swapCase("LMNOP")); // lmnop
console.log(swapCase("bBbBb")); // BbBbB
console.log(swapCase("qrsTUV")); // QRStuv


//Takes a number and returns a string of random letters with a 
//length of that number 
let createGibberish = (num) => {
    let randomWords = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < num; i++){
        randomWords += letters.charAt(Math.floor(Math.random() * letters.length ));
    }
    return randomWords;
}
console.log(createGibberish(3)); // "QYV"
console.log(createGibberish(7)); // "UPWXNLF"
console.log(createGibberish(0)); // ""










//Using [Closure] via the function within a funtion. This is when we use a variable that was declared in a 
//scope above the function, but that function has ended. 
//Example:
let counterFactory = () => {
    let count = 0; 
    let countUp = () => {
        count += 1;
        return count; 
    }
    return countUp; 
}
let counterStart = counterFactory()
console.log(counterStart())


//Example #2 
let greateGreeter = (name) => {
    let message = "My name is " + name + "!";
    return () => {
        console.log(message);
    };
};
let greeter = greateGreeter("JayDub");
greeter();


//Example #3 = Function takes value and returns a funtion that returns that value 
let simpleStart = (num) => {
    let count = 0;
    let returnNum = () => {
        return num;
    }
    return returnNum;
};
let foo = simpleStart(42);
console.log(typeof foo); // function
console.log(foo()); // 42
console.log(foo()); // 42
console.log(foo()); // 42







//exmaple #4 = Functon that takes in a string and returns function that 
//returns that string. However, each time the string gets shorter.

let slowSilencer = (str) => {
    let greeting = () => {
        if( str.length === 0) {
            return "";
        }else {
            str = str.slice(0, -1);
            return str;
        }
    }
    return greeting;
};

let speak = slowSilencer("Greetings!");
console.log(speak()); // Greetings
console.log(speak()); // Greeting
console.log(speak()); // Greetin
console.log(speak()); // Greeti
console.log(speak()); // Greet
console.log(speak()); // Gree
console.log(speak()); // Gre
console.log(speak()); // Gr
console.log(speak()); // G








//function that check is the character is the same as the string's first letter. 
let checkFirstLetter = (str, index) => {
    return str.charAt(0) === index; 
}
console.log(checkFirstLetter("Marie", "M")); // true
console.log(checkFirstLetter("Marie", "m")); // false
console.log(checkFirstLetter("Ken", "P")); // false





//Takes two numbers and if the numbers added together are greater than
//or equal to 10, return true and otherwise false
let toTenAndBeyond = (num1, num2) => {
    if ( num1 + num2 >= 10) {
        return true;
    } else {
        return false; 
    }
};
console.log(toTenAndBeyond(1, 2)); // false
console.log(toTenAndBeyond(8, 9)); // true

//OR!!!!!!!!!!!!!!!!!!!!!

let a = (num1, num2) => {
    return [num1, num2].map( num => num + num >= 10).includes(true);
};
console.log(a(1, 2)); // false
console.log(a(8, 9)); // true








//function takes string and string represents some code. 
//function returns true if the string contains the word "while". 
let javascriptPossiblyRunsForever = (str) => {
    return str.includes("while")
};
let badCode = "let condition = true; while (condition) { console.log('hi'); }";
console.log(javascriptPossiblyRunsForever(badCode)); // true

let goodCode = "for (let i = 0; i < 10; i++) { console.log('hi'); }";
console.log(javascriptPossiblyRunsForever(goodCode)); // false







//[ Local Storage ] = saves data For notmal javascript object permanently. Must be a "string".
//1.) using --> localStorage.setItem('numbers', numbersArrayString);
//2.) retrieve --> let X = parseInt(localStorage.getItem('X')) || 0;



//Example 
// Set a value in localStorage
localStorage.setItem('username', 'John');

// Get a value from localStorage
const storedUsername = localStorage.getItem('username');
console.log(storedUsername); // Output: John

// Update a value in localStorage
localStorage.setItem('username', 'Jane');
const updatedUsername = localStorage.getItem('username');
console.log(updatedUsername); // Output: Jane

// Remove a value from localStorage
localStorage.removeItem('username');

// Check if a value exists in localStorage
const isUsernameStored = localStorage.getItem('username') !== null;
console.log(isUsernameStored); // Output: false




//Storing an array of numbers using Local Storage 
// Define an array of numbers
const numbersArray = [1, 2, 3, 4, 5];

// Convert the array to a string using JSON.stringify
const numbersArrayString = JSON.stringify(numbersArray);

// Store the stringified array in localStorage under a key
localStorage.setItem('numbers', numbersArrayString);

// Retrieve the stringified array from localStorage
const storedNumbersArrayString = localStorage.getItem('numbers');

// Convert the string back to an array using JSON.parse
const storedNumbersArray = JSON.parse(storedNumbersArrayString);

// Log the retrieved array
console.log(storedNumbersArray);






//[ convert ] Convert strings into numbers 
// Using parseInt
const strToInt = "42";
const intNumber = parseInt(strToInt);
console.log(intNumber); // Output: 42

// Using parseFloat
const strToFloat = "3.14";
const floatNumber = parseFloat(strToFloat);
console.log(floatNumber); // Output: 3.14



//Example [local storage ]

<body>
  <div>I have been clicked <span id="the-counter">0</span> time(s).</div>
  <button id="the-button">ADD!</button>
  <button id="reset-button">Restore</button>
</body>

let totalCount = parseInt(localStorage.getItem("totalCount")) || 0;

window.addEventListener("load", () => {
    let button = document.getElementById("the-button");
    let counterElement = document.getElementById("the-counter");
    let resetButton = document.getElementById("reset-button");
    
    button.addEventListener("click", () => {
        totalCount += 1;
        counterElement.innerText = totalCount;

        localStorage.setItem("totalCount", totalCount.toString())
    }); 

    resetButton.addEventListener("click", () => {
        totalCount -= 1;
        counterElement.innerText = totalCount;
        localStorage.setItem("totalCount", totalCount.toString())
    })

    counterElement.innerText = totalCount;
});


