/*
1- Create array that contain some tips about JavaScript (Array of 10 strings,
    each string is tip about JS), 
    and show random tip for the user each time he opens the page "Tip of the day". 
*/


const TipJS = document.getElementById("tip-js");
const btnGenerateTip = document.getElementById("generate-tip");

let arr = [
            "Watch variable scope",
            "Use strict mode",
            "Understand async programming",
            "Avoid global variables",
            "Optimize DOM manipulation",
            "Handle errors gracefully",
            "Use modern JavaScript features",
            "Mind memory management",
            "Optimize loops (use built-in methods)",
            "Test cross-browser compatibility"];

btnGenerateTip.addEventListener("click",()=>{
     handleRandomTip();
    
});

window.addEventListener("DOMContentLoaded",()=>{
    handleRandomTip();
});


function handleRandomTip () {
    let randomNum = Math.random() * (arr.length-1);
    let QuaoteTip = arr[randomNum.toFixed(0)];
    TipJS.textContent = QuaoteTip; 
}



/*
    2-	Make a button that display the current date and time in local format on the page.
*/








/* 
    3-	Ask the user to enter his Email, and use function strings 
    (Don’t use RegExp) to check if the Email contains @, and not in the first or last index.
*/
const btnCheckEmail = document.getElementById("btn-check-email");
const rsltEmailValidate = document.getElementById("rslt-email-validate");
btnCheckEmail.addEventListener("click",()=>{
    const userEmail = prompt("Enter Your Email ");
    if(userEmail.indexOf("@") != -1 && userEmail[0] != "@"&& userEmail[userEmail.length-1] != "@"){  
        rsltEmailValidate.textContent =  "Ok Your email is validate ";
    }else{
        rsltEmailValidate.textContent = "Your email Not validate"
    }
});



/*
    4-	Prompt user to enter his Full Name and email address, and use regular expression only (don't use string functions) to validate his input to make sure it is in correct format using these criteria: 
        a.	Full Name should be characters only (without numbers or special characters) and has the following structure:
            •	Characters (alphabetic only) more than 3.
            •	Then one space.
            •	And finally some other characters (alphabetic only) more than 3 
            •	This pattern may be repeated, so it can contain other spaces but after each space must be 3 alphabetic characters at least (like full name, each part is 3 letters at least, and separated by a space).
            •	And shouldn’t start or end with spaces or special characters.
*/


prompt("enter first name","enter you last name");






