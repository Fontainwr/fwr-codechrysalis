window.addEventListener("load", () => {
    // Add your code here!
    let counter = 1
    const button = document.getElementById("add-thing");
    const divLocation = document.getElementById("a-div-tag")

    button.addEventListener("click", () => {
        const newP = document.createElement("p")
        newP.innerText = "Creating a New Paragraph #: " + counter + "!"
        counter ++;
        
        divLocation.append(newP);
    })
  });