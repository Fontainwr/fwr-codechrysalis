window.addEventListener("load", () => {
    let clickCounter = 0; 

    function updateButtonText() {
        let message = document.querySelector("#message");
        message.innerText = clickCounter;
    };

    let buttonClick = document.querySelector("#button");

    buttonClick.addEventListener( "click", (event) => {
        clickCounter++;
        updateButtonText();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            clickCounter++;
        } else if ( event.key === "ArrowDown"){
            clickCounter--; 
        }
        updateButtonText();
    });

    let buttonReset = document.querySelector("#buttonReset");

    buttonReset.addEventListener("click", (event) => {
        clickCounter = 0;
        updateButtonText();
    });

    let counter = 1;
    const addButton = document.querySelector("#add-thing");
    const produce = document.querySelector("#a-div-tag");

    addButton.addEventListener("click", (event) => {
        let newPh = document.createElement("p");
        newPh.innerText = "Here is a new pharagraph #: " + counter + "!";
        counter++
        produce.appendChild(newPh);
    });

    let removeItem = document.querySelector("#remove");


    function removePh() {
        let content = document.querySelector('#a-div-tag');
        while ( content.firstChild) {
            content.removeChild(content.firstChild);
        }
    };

    removeItem.addEventListener("click", removePh)





    // removeItem.addEventListener("click", () => {
    //     // let counter = 0;
    //     let removePh = document.querySelector("p");
    //     if ( removePh.lenght > 0 ){
    //     produce.removeChild(removePh[removePh.length -1]);
    //     // counter--
    //     } else {
    //         return "All removed!"
    //     }
    // });

    
});