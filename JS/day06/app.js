// // // assignment 01
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




// // // assignment 02 
const btnShowDate = document.getElementById("btn-show-date");
const showTime = document.getElementById("show-time");

btnShowDate.addEventListener("click",()=>{
    alert("Clock started");
    const startShowTime = setInterval(append,0);
    window.addEventListener("keydown",(e)=>{
        if(e.altKey && e.key.toLowerCase() === "w"){
            console.log("alt + w");
            alert("Clock is Stoped !");
            setTimeout(()=>{
                clearInterval(startShowTime)
            },0);
        }
    });
    
});

function append(){
    let CurrentDate = new Date().toTimeString();
    showTime.textContent = CurrentDate;

}


// // // assignment 03 
// // /*
// //     3-	Create a page that contains 3 images, and use JavaScript Code (not in HTML tag)
// //          to handle onclick event on all of them, to increase a counter when each image is clicked.
// //         a.	Use addEventListner to add new handler for the onclick event listener,
// //              to alert the score (the value of the counter), when any image of them clicked.
// //             i.	What’s the difference between handling the event using addEventListner() and other methods?
// //             ii.	Will addEventListner() will overwrite the other handler function attached to that button before?
// //             iii.	How does addEventListner() handles the event bubbling in better way?
// //         b.	After 3 seconds (Use setTimeOut), use removeEventListner 
// //         to remove the last event handler onclick that alerts the user score,
// //         and instead of it add new handler (Using addEventListner),
// //         that shows new alert saying “Game Over”.
// // */


const imgs = document.querySelectorAll(".img");
const showCounter = document.getElementById("show-counter");
let counter= 0 ;
imgs.forEach((img)=>{
     img.addEventListener("click",handleIncreasCnt);
});
function handleIncreasCnt(){
        counter++;
        alert(`counter Equal :  ${counter}`)
        showCounter.textContent = counter;

}
function handleToRemoveEvent(){
    imgs.forEach((imgNew) => {
        imgNew.removeEventListener("click",handleIncreasCnt);
        imgNew.addEventListener("click",()=>{
            console.log("click mouse");
        })
    });
    console.log("set time out removed");
    alert(`Game Over And Your Score ${counter}`);
}
setTimeout(handleToRemoveEvent,7000);
    
    
    

// // // Assignment 04 
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-login");
// const showUserName = document.getElementById("show-username");
// const showPassord = document.getElementById("show-password");

btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    let valuePass =inputPassword.value; 
    let valueUser = inputUserName.value;
    if( valuePass === ""&& valueUser === "" && valueUser.length >= 5){
        
        
        alert("Your Input Empty");
    }else{
       
        window.open(`/profile.html?userName=${inputUserName.value}`);
        inputPassword.value = "";
        inputUserName.value = "";
    }
});




// // assignment 05 
const btnAnchor = document.getElementById("btn-anchor");
const btnclose = document.getElementById("close-window");
console.log("clicked new window");
btnAnchor.addEventListener("click",(e)=>{
    e.preventDefault();
    setTimeout(openNewWindow,5000);
})
// btnclose.addEventListener("click",()=>{
//     window.close("test.html");
// })
const openNewWindow = () => {
    window.open("test.html");
}



// assignment 06
window.addEventListener("DOMContentLoaded",()=>{
    let pathUrl = window.location.pathname.substring(1);
    console.log("location path",pathUrl);
    if(pathUrl=== "test.html"){
        setInterval(() => {
            window.scrollBy(0,100)
        }, 500);

    }
})






// assignment 07 
window.addEventListener("DOMContentLoaded",()=>{
    const inputValidUser = document.getElementById("second-username");
        inputValidUser.addEventListener("keydown",(e)=>{
            console.log("event",e.key);
            let KeyUser = e.key;
            if(KeyUser >= 'a' && KeyUser <='z')    console.log('Done');
            else e.preventDefault();
            
    })
});






