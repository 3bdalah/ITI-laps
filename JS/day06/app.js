


// assignment 01
const textBox = document.getElementById("text-box");
textBox.addEventListener("click", ()=>{
    alert("Left Click");
    console.log("left click");
});
textBox.addEventListener("contextmenu",(e)=>{
    // to stop do default 
    e.preventDefault();
    alert("Right Click");
    console.log("Right Click");
});




// assignment 02 
const btnShowDate = document.getElementById("btn-show-date");
const showTime = document.getElementById("show-time");

function append(){
    let CurrentDate = new Date().toTimeString();
    showTime.textContent = CurrentDate;
    console.log(CurrentDate);
}
// let counter =0;
btnShowDate.addEventListener("click",()=>{
    setInterval(append,1000);

    // console.log(CurrentDate.toTimeString());
});