window.addEventListener("load", () => {
    console.log("The page is loaded! It is now safe to access the DOM.");


    function countToX(num) {
        let countMain = document.querySelector(".main p");
        let counter = 1;

        function updateCounter() {
            if(counter <= num) {
                countMain.innerText = counter + ": Visitors";
                counter +=1;
            }else {
                clearInterval(intervalId);
            }
        }
            let intervalId = setInterval(updateCounter, 300);
        }
        countToX(12);
});