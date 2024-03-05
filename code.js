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