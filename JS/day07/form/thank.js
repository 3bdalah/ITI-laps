




window.addEventListener("DOMContentLoaded",()=>{
    const h1 =document.getElementById("h1");
    const username = window.location.search.split("=")[1];
    const username2 = username.split("%20");
    console.log("username", username2)
    // h1.textContent += fullname.value;
    h1.textContent += username2[0]; 
    // console.log(username);
})


