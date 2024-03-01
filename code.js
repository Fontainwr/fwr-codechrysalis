// Function to change the title of the HTML document
function changeTitle(str) {
    let pageTitle = document.getElementById("page-title");
    pageTitle.innerText = str;
}

// Function to get a list of states shaped like rectangles
function getRectangleStates() {
    let shapeDeclaration = document.getElementById("shape-declaration");
    let stateList = shapeDeclaration.nextElementSibling.children;
    let rectangleStates = [];
    for (let li of stateList) {
        rectangleStates.push(li.innerText);
    }
    return rectangleStates;
}

// Function to get a list of facts from elements with class="fact"
function getFacts() {
    let factElements = document.getElementsByClassName("fact");
    let facts = [];
    for (let element of factElements) {
        facts.push(element.innerText);
    }
    return facts;
}

// Function to change the list of states
function changeStateList(newList) {
    let stateListItems = document.getElementsByTagName("li");
    for (let i = 0; i < stateListItems.length; i++) {
        stateListItems[i].innerText = newList[i];
    }
}