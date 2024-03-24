window.addEventListener("load", () => {
    
    let button = document.querySelector("#add-thing");
    let counter = 1;

    button.addEventListener("click", () => {
        let say = document.createElement("p");
        say.innerText = "Hello Team #" + counter + "!";
        counter++;
    
        let container = document.querySelector("#a-div-tag");
        container.append(say);
    });
});