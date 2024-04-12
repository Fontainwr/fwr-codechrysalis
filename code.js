window.addEventListener("load", () => {
    let clickCounter = 0; 

    function updateButtonText() {
        let message = document.querySelector("#message");
        message .innerText = clickCounter;
    };

    let buttonClick = document.querySelector("#button");

    buttonClick.addEventListener("click", (event) => {
        clickCounter++;
        updateButtonText();
    });


    let resetButton = document.querySelector("#buttonReset")

    resetButton.addEventListener("click", (event) => {
        clickCounter = 0;
        updateButtonText();
    });

    let counter = 1;
    let addParagraph = document.querySelector("#add-thing");


    addParagraph.addEventListener("click", (event) => {
            let newParagraph = document.createElement("p");
            newParagraph.textContent = "Paragraph number #: " + counter;
            let container = document.createElement("div");
            container.appendChild(newParagraph);
            document.body.appendChild(container); 
            counter ++ 
        });

    document.addEventListener("keydown", (event) =>{
        if (event.key === "ArrowUp"){
            clickCounter++
        } else if ( event.key === "ArrowDown"){
            clickCounter--;
        }
        updateButtonText();
    })
    
});