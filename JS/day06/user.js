
const welcomeMsg = document.getElementById("show-username");


window.addEventListener("DOMContentLoaded",()=>{
    const username = window.location.search.split("=")[1];
    console.log(username);
    welcomeMsg.textContent += username;
    
})