function addItem() {
    let inputText = document.getElementById("addItemInput").value;

    if (inputText.trim() !== "") {
        let newItem = document.createElement("li");
        newItem.innerHTML = inputText;
        document.getElementById("itemList").append(newItem);
        document.getElementById("addItemInput").value = "";
    }
}

function removeItem() { 
    lastItem = document.getElementById("itemList").lastElementChild;
    if(lastItem !== null) {
        document.getElementById("itemList").removeChild(lastItem)
    }
}