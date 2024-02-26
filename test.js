//January 19th







//Arrays info 

let numbers = [1, 2, 3, 4, 5, 6];
let i = 0;
let sum = 0;
while (i < numbers.length) {
  sum = sum + numbers[i];
  i = i + 1;
}
let average = sum / numbers.length;
console.log("The average of these numbers is " + average);