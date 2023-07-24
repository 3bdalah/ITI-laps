  const fullname = document.getElementById("fullname");

  fullname.addEventListener("focus", () => {
    fullname.style.border = "4px solid blue";
  });

  fullname.addEventListener("blur", () => {
    fullname.style.border = "1px solid #999";
    console.log(fullname.value.trim());
    if (fullname.value.trim() === "" || fullname.value.length <= 3) {

        // checkInputsEmpty();
        //   alert("Invalid name, please enter a valid full name.");
      setTimeout(() => {
        fullname.focus();
        fullname.select();
      }, 100);
    }
    console.log(fullname.value);
  });

//      const url = `url-of-new-window?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;


// e for password 
const form = document.getElementById("form");
const firstPassword = document.getElementById("password1");
const secondPassword = document.getElementById("password2");
const validPassword = document.getElementById("valid-password");
const email = document.getElementById("email-input");
const showValidate = document.getElementById("show-validate");
const checkBox= document.getElementById("checkbox");
const btnRegister = document.getElementById("btn-register");
form.addEventListener("submit",()=>{
    // e.preventDefault();
   console.log("form submit")
})


secondPassword.addEventListener("blur",()=>{
    console.log(firstPassword.value);
    handleValidatPassword(firstPassword,secondPassword,showValidate);
});


function handleValidatPassword(first,second,element){
    // const p = document.createElement("p");
    // p.setAttribute("class","mo");
    // console.log("pragraph" , p); 
     if(first.value !== second.value ){
        first.style.background = "gray";
        second.style.background = "gray";
        element.textContent = "password and repeat password should be the same";
        // element.appendChild(p);
     }else{
       element.textContent = "Validate Password";
       
       first.style.background = "white";
       second.style.background = "white";
    //    element.appendChild(p);    
     }
}




btnRegister.addEventListener("click",(e)=>{
    e.preventDefault();
    validateInputs();
    let checkValidate = checkInputsEmpty();
     if(checkValidate){
        form.submit();
        console.log("handle testtt formsubmitted");
     }
})




function validateInputs(){
    if(fullname.value !== "" && firstPassword.value !== "" && secondPassword.value !== ""){
     window.open("test.html");  
    }else{
        
    checkInputsEmpty();
        console.log("Your  Inputs Empty ");
    }
}
// To show Asttrick
const astrickName = document.getElementById("astrick-name");
const astrickPassword1 = document.getElementById("astrick-password1");
const astrickPassword2 = document.getElementById("astrick-password2");
const astrickCheckbox = document.getElementById("astrick-checkbox");
const astrickEmail = document.getElementById("astrick-email");

function checkInputsEmpty(){
   // fullname,firstPassword , secondPassword
   if(fullname.value.trim() === ""){
      astrickName.classList.add("empty");
      return false;}
      // else{
    //     astrickName.classList.remove("empty");
    // }
   
   if(firstPassword.value.trim() === "" || firstPassword.value.length < 8){
      astrickPassword1.classList.add("empty");
      return false;}
      //    }else{
//     astrickPassword1.classList.remove("empty");
//    }

   if(secondPassword.value !== firstPassword.value|| secondPassword.value === ""){
    astrickPassword2.classList.add("empty");
    return false;
   }
// }else{
//     astrickPassword2.classList.remove("empty");
//    }

   if(email.value === ""){
    astrickEmail.classList.add("empty");
    return false;
   }
    //    }else{
//     astrickEmail.classList.remove("empty");
//    }
   console.log("checkbox",checkBox.value)
   if(!checkBox){
        astrickCheckbox.classList.add("empty");
        return false;
   }
   return true;
}