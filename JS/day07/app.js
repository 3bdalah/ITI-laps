// const fullname = document.getElementById("fullname");

// fullname.addEventListener("focus", () => {
//   fullname.style.border = "4px solid blue";
// });

// fullname.addEventListener("blur", () => {
//   fullname.style.border = "1px solid #999";
//   console.log(fullname.value.trim());
//   if (fullname.value.trim() === "" || fullname.value.length <= 3) {
//     setTimeout(() => {
//       fullname.focus();
//       fullname.select();
//     }, 100);
//   }
//   console.log(fullname.value);
// });

// const form = document.getElementById("form");
// const firstPassword = document.getElementById("password1");
// const secondPassword = document.getElementById("password2");
// const validPassword = document.getElementById("valid-password");
// const email = document.getElementById("email-input");
// const showValidate = document.getElementById("show-validate");
// const checkBox = document.getElementById("checkbox");
// const btnRegister = document.getElementById("btn-register");
// const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
// // const imgvalidname = document.getElementById("imgvalidname");
// // const imgnotvalidname = document.getElementById("imgnotvalidname");
// // const elementsForm = form.
// form.addEventListener("submit", () => {
//   console.log("form submit");
// });

// secondPassword.addEventListener("blur", () => {
//   console.log(firstPassword.value);
//   handleValidatePassword(firstPassword, secondPassword, showValidate);
// });

// function handleValidatePassword(first, second, element) {
//   if (first.value !== second.value) {
//     first.style.background = "gray";
//     second.style.background = "gray";
//     element.textContent = "password and repeat password should be the same";
//   } else {
//     element.textContent = "Validate Password";
//     first.style.background = "white";
//     second.style.background = "white";
//   }
// }

// btnRegister.addEventListener("click", (e) => {
//   e.preventDefault();
//   validateInputs();
//   let checkValidate = checkInputsEmpty();
//   if (checkValidate) {
//     form.submit();
//     console.log("handle testtt formsubmitted");
//   }
// });

// function validateInputs() {
//   if (fullname.value !== "" && firstPassword.value !== "" && secondPassword.value !== "") {
//     window.open("test.html");
//   } else {
//     checkInputsEmpty();
//     console.log("Your Inputs Empty");
//   }
// }

// To show Asterisk
const astrickName = document.getElementById("astrick-name");
const astrickPassword1 = document.getElementById("astrick-password1");
const astrickPassword2 = document.getElementById("astrick-password2");
const astrickCheckbox = document.getElementById("astrick-checkbox");
const astrickEmail = document.getElementById("astrick-email");

function checkInputsEmpty() {
  if (fullname.value.trim() === ""|| !fullNameRegex.test(fullname.value)) {
    // astrickName.classList.add("empty");
    // imgnotvalidname.style.display = "inline";
    
    return false;
  } else {
    
    // imgnotvalidname.style.display = "none";
    
    // imgvalidname.style.display = "inline";
    // astrickName.classList.remove("empty");
  }

  if (firstPassword.value.trim() === "" || firstPassword.value.length < 8) {

    // astrickPassword1.classList.add("empty");
    return false;
  } else {
    // astrickPassword1.classList.remove("empty");
  }

  if (secondPassword.value !== firstPassword.value || secondPassword.value === "") {
    // astrickPassword2.classList.add("empty");
    return false;
  } else {
    // astrickPassword2.classList.remove("empty");
  }

  if (email.value === "") {
    // astrickEmail.classList.add("empty");
    return false;
  } else {
    // astrickEmail.classList.remove("empty");
  }

  console.log("checkbox", checkBox.value);
  if (!checkBox.checked) {
    // astrickCheckbox.classList.add("empty");
    return false;
  } else {
    // astrickCheckbox.classList.remove("empty");
  }

  return true;
}




// assignment 05 // Get all the elements we need
const slidesContainer = document.getElementById('slides');
const imgsBox = document.querySelector('.imgs-box');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

// Variables to handle slideshow functionality
let intervalId;
let currentIndex = 0;

// Function to change slide and handle index boundaries
function changeSlide(index) {
  const slides = imgsBox.querySelectorAll('.img-slide');
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }
  imgsBox.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Start slideshow on mouseover
slidesContainer.addEventListener('mouseover', () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      currentIndex++;
      changeSlide(currentIndex);
    }, 500);
  }
});

// Stop slideshow on mouseout
slidesContainer.addEventListener('mouseout', () => {
  clearInterval(intervalId);
  intervalId = null;
});

// Next button click event
nextButton.addEventListener('click', () => {
  currentIndex++;
  changeSlide(currentIndex);
});

// Previous button click event
previousButton.addEventListener('click', () => {
  currentIndex--;
  changeSlide(currentIndex);
});

// Start button click event
startButton.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      currentIndex++;
      changeSlide(currentIndex);
    }, 500);
  }
});

// Stop button click event
stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});
















// assignment 06
// const gallery = document.getElementById("gallery");
const imgs = document.querySelectorAll(".photo");

imgs.forEach((photo)=>{
     photo.addEventListener("mousemove",()=>{
         photo.style.opacity = 0.4;
     });
     photo.addEventListener("mouseout",()=>{
        photo.style.opacity = 1;
     })
});





// assignment 07 
/*

7-	Use HTML Dom, to do the following:
    a.	Create image node (using document.createElement()).
    b.	Set it source image (using setAttribute()).
    c.	Append it to a div on the page (Try appendChild() and insertBefore(), what’s the difference)?	
    d.	After appending the image, alert the number of child nodes to the div (Use element.childNodes.length), what are the count of div child nodes? And Why?
    e.	Remove the added image (using removeChild()).
*/ 

// const arrSrc = [""]
const parentImg = document.getElementById("parent-img");
const btnRemoveImg = document.getElementById("btn-remove");
const btnAppendImg = document.getElementById("btn-append");
const btnShowCountNodes = document.getElementById("show-count-nodes");
const counterNodes = document.getElementById("counter-nodes");

  const img1 =  document.createElement("img");
  const img2 = document.createElement("img");
  const br = document.createElement("br");
  const h1 = document.createElement("h1");
  const src1 = "./slides/2.jpg";
  const src2 = "./slides/3.jpg";
  img1.setAttribute("src",src1);
  img2.setAttribute("src",src2);
  h1.textContent = "Insertbefore"
  parentImg.appendChild(img2);
  parentImg.insertBefore(img1,img2);
  parentImg.insertBefore(br,img2)
  parentImg.insertBefore(h1,img1);
btnRemoveImg.addEventListener("click",()=>{
  
  parentImg.removeChild(img2);
});

btnAppendImg.addEventListener("click",()=>{
  let imgAppend = document.createElement("img");
  imgAppend.setAttribute("src",src1);
  parentImg.appendChild(img2);
    console.log("btn append child")
});

btnShowCountNodes.addEventListener("click",()=>{
counterNodes.textContent = parentImg.childNodes.length;
//    console.log("length : ",parentImg.childNodes.length);
});