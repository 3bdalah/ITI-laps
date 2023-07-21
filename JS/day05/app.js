// /*
// 1- Create array that contain some tips about JavaScript (Array of 10 strings,
//     each string is tip about JS), 
//     and show random tip for the user each time he opens the page "Tip of the day". 
// */


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
    let randomNum = Math.floor(Math.random() * arr.length);
    let QuaoteTip = arr[randomNum.toFixed(0)];
    TipJS.textContent = QuaoteTip; 
}



// /*
//     2-	Make a button that display the current date and time in local format on the page.
// */

const btnDisplayLocalFormat = document.getElementById("btn-date-time");
const displayLocalFormat = document.getElementById("display-local-format");
btnDisplayLocalFormat.addEventListener("click",()=>{
    const localFormat = new Date().toLocaleString();
    displayLocalFormat.textContent = localFormat;
    // console.log('local format  : ',localFormat)
})






// /* 
//     3-	Ask the user to enter his Email, and use function strings 
//     (Don’t use RegExp) to check if the Email contains @, and not in the first or last index.
// */
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


// const inputUserName = document.getElementById("username");
// const inputUserEmail = document.getElementById("useremail");
// const BtnCheckUserName = document.getElementById("btn-check-username");
// const fullNamePattern = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




// BtnCheckUserName.addEventListener("click",()=>{
//     let fullName = inputUserName.value;
//     let userEmail = inputUserEmail.value;
//     if(fullName&&userEmail&&fullName ){
       
//     }else{
//         resetInput();
//     }
    
//     // console.log(inputUserName.value);
//     inputUserName.value = "";

//     // condition to check

// });

// function resetInput(){
//     inputUserName.value = "";
//     inputUserEmail.value = "";   
// }
// inputUserName.addEventListener("onChange",()=>{
//     console.log()
// })









// assignnment 05 
const inputFullName = document.getElementById("fullName")
const btnshowFullName = document.getElementById("btn-full-name");
const displaFullName = document.getElementById("show-full-name");

btnshowFullName.addEventListener("click",()=>{
    let valueFullName =inputFullName.value;
    if(valueFullName === ""){
       alert("Enter Your Full Name ")
    }else{
        // console.log("Full NAMe", valueFullName);
        displaFullName.textContent = valueFullName;
        inputFullName.value = "";
    }
})

// assignment 06 
/*
        6-	Create an array that hold the following students grades : 60, 100,10,15,85, 
        and handle the following:
        a.	Sort the array numerically descending.
        b.	Using the sorted Array find the highest student degree (first degree less than or equal to 100) [Use find()].
        c.	Print the grades of all students with grades below 60 [Use filter()]
*/

const listGrades = document.getElementById("list-grades");
const listGradesAfterSort = document.getElementById("list-grades-after-sort");
const listGradesLessSixty = document.getElementById("list-grades-less-sixty");
let arrGrades = [60,100,10,15,85,56,34,12,99,78,75];

handleDisplayArraySorted(arrGrades,listGrades);

let gradeSorted = arrGrades.sort((a,b) => b - a);
handleDisplayArraySorted(gradeSorted,listGradesAfterSort);
console.log("Array After Soted : ",gradeSorted);
let Hieghestdegree = gradeSorted[0];


let newArraFilterd = arrGrades.filter((degree) => degree <60)


// for(let i=0;i<arrGrades.length;i++){
//     if(gradeSorted[i] < 60){
//         const li = document.createElement("li");
//         li.textContent = arrGrades[i];
//         listGrades.appendChild(li);
//     }
// }

handleDisplayArraySorted(newArraFilterd,listGradesLessSixty);

function handleDisplayArraySorted(arr,listParent){
    arr.forEach(element => {
           const LI =  document.createElement('li');
           LI.textContent = element;
           listParent.appendChild(LI);
        //    console.log("element" , element);
    });
  
  }

// assignment 07 



/*

7-	Create an array of objects that hold student name along with his degree 
    (Each element of the array is an object has 2 properties: Name and Degree).
    a.	Find student Name, who got degree between 90 and 100 [Use find()].
    b.	Print students names, who got a degree less than 60 [Use filter()].
    c.	Add a new student to the array [Use push()],()], and then use for…in to print all elements of the array.
    d.	Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array.
    e.	Sort the array alphabetically based on the student name. 
    f.	Use splice() function to add 2 new students after the second element of the array [Bonus].
    g.	Use splice() function to remove 1 student after the third element in the array [Bonus].

*/ 

const UL = document.getElementById("list-array");
const findBetween = document.getElementById("find-between");
let arrStudent = [  {name : "ahmed",degree : 65},
                    {name : "ali",degree : 55},
                    {name : "mostafa",degree : 85},
                    {name : "hassan",degree : 35},
                    {name : "essam",degree : 45},
                    {name : "abdo",degree : 115},
                    {name : "mohmoud",degree : 105},
                    {name : "aya",degree : 95},
                    {name : "zarref",degree : 85},];


console.log('new students who got degree between 90 and 100');
let newStudents = arrStudent.find((item,index) => {
    if(item.degree <=100 && item.degree >=90){
        console.log(item.name);
    }
});

let degreeLess = arrStudent.filter((item) => item.degree<60 )

console.log('new aray After filter less than 60 : ',degreeLess);


arrStudent.push({name:"sayed",degree:98});
console.log('new aray After Push',arrStudent);


console.log("display Array iterate by for in : ");
for(let student in arrStudent){
    console.log(arrStudent[student])
}



// // pop 
arrStudent.pop();
console.log('an  array After Pop method',arrStudent);

console.log("display Array iterate by for of : ");
for(let student of arrStudent){
    console.log(student)
}


// sort

let newSortStudent = arrStudent.sort((a,b) =>{
    // return a.name - b.name;
    return a.name.localeCompare(b.name);
    // return 
});

console.log("display Array after Sorted : ",newSortStudent);
// console.log("newSorted array", newSortStudent);


// splice
arrStudent.splice(1,0,{name:"sara",degree : 99});
console.log("display Array after Splice : ",arrStudent);
// console.log("splice",arrStudent)



arrStudent.splice(2,1);
// console.log("delete by splice ",arrStudent);

console.log("display Array after Splice 2 , 1 and delete : ",arrStudent);


function handleDisplayArray(arr,listParent){
    arr.forEach(element => {
           const LI =  document.createElement('li');
           LI.textContent = element;
           listParent.appendChild(LI);
        //    console.log("element" , element);
    });
  
  }

/**
    8-	Show prompt that ask user to enter
    his birth date and tell user to enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999,
     and then create function that take user input as a parameter 
     and ensure that the string is entered in this format 
     (that user entered string is 10 characters 
        and contains (-) after the second character and after fifth character).
        [Don't use RegExp, use string functions].
    a.	If the user input was correct: make the function create new date object,
     and initialize it with Day, Month, year values (using date constructor:
         Date(y,m,d)) and then show alert to the user with the date in date string format. 
    b.	If user input wasn't correct, show alert saying "Wrong Date Format". 
    c.	Create button “show date” that calls the function. 

 */



const btnShowDate = document.getElementById("btn-show-date");


btnShowDate.addEventListener("click",()=>{
    const birthDate = prompt("Enter Your Bith Date in the following format (DD – MM – YYYY) ex. 22–01–1999 ");

    ValidateBirthDate(birthDate);
})

function ValidateBirthDate(birthDate){
   const lengthBirth = birthDate.length;
   const secondDash = birthDate[2];
   const fifthDash = birthDate[5];
   if(lengthBirth === 10 && secondDash === '-' && fifthDash === '-'){
        const newDate = new Date();
        const Day = newDate.getDay();
        const Month = newDate.getMonth();
        const Year = newDate.getFullYear();
        alert(Date(Year,Month,Day));
        console.log("date ", Date(Year,Month,Day))
    //    alert()
   }else{
    
       alert("Wrong Date Format");
    // console.log("date ", Date(Year,Month,Day))
   }

}



// const newDate = new Date();
// const Day = newDate.getDay();
// const Month = newDate.getMonth();
// const Year = newDate.getFullYear();


// console.log(Date(Year,Month,Day));





function handleDisplayArray(arr,listParent){
  arr.forEach(element => {
         const LI =  document.createElement('li');
         LI.textContent ="Name : " + element.name + " <=======> "+" Degree :" +element.degree;
         listParent.appendChild(LI);
         console.log("element" , element);
  });

}

handleDisplayArray(arrStudent,UL);