//Feb 2nd  DOM 


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