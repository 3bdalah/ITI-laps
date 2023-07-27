
const btnClicked = document.getElementById("btn-clicked");
const counter =document.getElementById("counter");
const btnReset = document.getElementById("btn-clear");
let cnt =  localStorage.getItem("counter");
counter.innerHTML =cnt;
btnClicked.addEventListener("click",()=>{
       console.log("clicked");
       ++cnt;
       counter.innerHTML =cnt;
       localStorage.setItem("counter", cnt);
});

btnReset.addEventListener("click",()=>{
  console.log("reset local storeage");
  localStorage.setItem("counter",0);
  location.reload();
//   counter.innerHTML = localStorage.getItem("counter");
})
console.log("hello");