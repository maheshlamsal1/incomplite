let change = document.querySelector(".change");
change.innerHML = "Hello";
let changes = ["Devloper", "Youtuber", "Gamer"];
let a = 0;
let b = 0;
let imgChange=document.querySelector(".imgC");
console.log(imgChange);
function chang() {
  console.log(b);
  b = b + 1;
  if (b == 3) {
    
    b = 0;
  }
 
  

     change.innerHTML = changes[b];
   
  if (change.innerHTML == changes[0]) {
    change.setAttribute(
      "style",
      "-webkit-filter: drop-shadow(2px 2px 5px blue);color:blue;"
    );
    imgChange.setAttribute(
      "src",
      "mailo1.png");
  }
  if (change.innerHTML == changes[1]) {
    change.style.color = "orange";
    change.setAttribute(
      "style",
      "-webkit-filter: drop-shadow(2px 2px 5px orange);color:orange;"
    );
  }
  if (change.innerHTML == changes[2]) {
    change.style.color = "lightgreen";
    change.setAttribute(
      "style",
      "-webkit-filter: drop-shadow(2px 2px 5px green);color:green;"
    );
    imgChange.setAttribute(
      "src",
      "mailo2.png");
  }
}

setInterval(chang, 1000);
