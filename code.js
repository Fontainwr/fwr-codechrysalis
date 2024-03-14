
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

