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