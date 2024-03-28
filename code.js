window.addEventListener("load", () => {
    let clickCounter = 0;

    function updateButtonText() {
        let message = document.querySelector("#message");
        message.innerText = clickCounter;
    }

    let button = document.querySelector("#button");

    button.addEventListener("click", (event) => {
        // Check if Shift key is pressed
        if (event.key === "space") {
            // Reset clickCounter to 0 if Shift key is pressed while clicking the button
            clickCounter = 0;
        } else {
            // Increment clickCounter if Shift key is not pressed
            clickCounter++;
        }
        updateButtonText();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            clickCounter++;
        } else if (event.key === "ArrowDown") {
            clickCounter--;
        }
        updateButtonText();
    });

    let buttonReset = document.querySelector("#buttonReset");

    buttonReset.addEventListener("click", (event) => {
        // Check if Shift key is pressed
        clickCounter = 0;
        updateButtonText();
    });

    

    // Add your code here!
    let counter = 1;
    const addButton = document.getElementById("add-thing");
    const divLocation = document.getElementById("a-div-tag");

    addButton.addEventListener("click", () => {
        const newP = document.createElement("p");
        newP.innerText = "Creating a New Paragraph #: " + counter + "!";
        counter++;
        
        divLocation.appendChild(newP);
    });
});
