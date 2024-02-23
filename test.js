let words = "The rain in Spain falls mainly on the plain.";

let result5 = "The " + words.substring(4, 8).toUpperCase() + " " +
              words.substring(4, 8).toUpperCase() + " " +
              words.substring(4, 8).toUpperCase() + " on the " +
              words.substring(38, 43).toUpperCase() + " " +
              words.substring(38, 43).toUpperCase() + " " +
              words.substring(38, 43).toUpperCase() + ".";

console.log(result5); // Output: "The RAIN RAIN RAIN on the PLAIN PLAIN PLAIN."
