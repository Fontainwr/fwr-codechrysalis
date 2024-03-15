window.addEventListener("load", () => {
    console.log("The page is loaded! It is now safe to access the DOM.");



    function countToX(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {
          result.push(i);
        }
        return result;
      }
      
      console.log(countToX(5)); // [1, 2, 3, 4, 5]
});