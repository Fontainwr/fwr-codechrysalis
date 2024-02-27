// January 24


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