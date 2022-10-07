 const btn = document.querySelector(".color");
 const copy = document.querySelector(".copy");
 const hex = document.querySelector(".hex");
 const container = document.querySelector(".container")


 


 
    
const generateColor = function () {
    const randomColor = Math.random().toString(16).substring(2, 8);

    hex.value = "#" + randomColor;

    const color = "#" + randomColor;

    container.style.background = color
};


const copyColor =  function () {
   hex.select() ;
   hex.setSelectionRange(0, 1000);

   document.execCommand("copy")
   alert ("This text has been copied to clipboard")
};

btn.addEventListener("click", generateColor);
copy.addEventListener("click", copyColor);
