// "use strict";
// // import sum  from "./AssignmentTwo";


// Assigment 01 

const Welcome = document.getElementById("msgWelcome"); 
window.alert("Welcome to my site ");
const name = prompt("Enter your name ? ") || "3bdallah";

Welcome.innerHTML += name;   
console.log("user name : ", name);




// Assignment 02 
const btnSum = document.getElementById("btn-sum");;
const displayResult = document.getElementById("display-result");

btnSum.addEventListener('click',()=>{
   const numberOne = parseFloat(prompt("Enter Numbre One "));
   const numberTwo = parseFloat( prompt("Enter Numbre Two "));
   const result = sum(numberOne,numberTwo);
   displayResult.innerHTML += result;
   console.log("Sum Two Number : ", result);
});

// function summation 
function sum(num1,num2){
    return (num1+num2);
}


// Assignment 03 

const BtnTemp =  document.getElementById("btn-temperature");
const DisplayTemp = document.getElementById("display-temp");

BtnTemp.addEventListener("click",() => {
  const DegreeTemp = parseFloat(window.prompt("Enter number Temperature "));
  const resultTemp = temperature(DegreeTemp);
  console.log(resultTemp); 
  DisplayTemp.textContent = resultTemp;
});


function temperature (number){
    return (number >= 30  ?  "HOT" : "Cold");
}


// Assignment 04 

const btnTempFeel = document.getElementById("btn-temp-feel");
const displayTempfeel = document.getElementById("display-temp-feel");
let Result = "";
function TempAndFeel (Temp,Feel){
   if(Temp >=25 && Temp <=30 && Feel >=25&& Feel<=30) Result = "Normal";
   else if(Temp <25 && Feel <25) Result = "Cold";
   else if(Temp > 30 && Feel > 30) Result = "Hot";
   else Result = "Ambiguous, can’t detect";
}




// Assignment 05 


function handleStudentfaculty (faculty){
 if(faculty === "FCI"){
     console.log("You’re eligible to Programing tracks");
 }else if(faculty === "Engineering"){
      console.log("You’re eligible to Network and Embedded tracks");
 }else if(faculty === "Commerce"){
    console.log("You’re eligible to ERP and Social media tracks");
 }else{ 
    console.log("You’re eligible to SW fundamentals track");
 }
} 


// Assignment 06 
const BtnFilterOdd = document.getElementById("btn-even-odd");
const result = document.getElementById("display-result-odd");
let numbersOdd = [];

BtnFilterOdd.addEventListener("click",()=>{
    const Start = parseFloat(prompt("Enter Start number"));
    const End = parseFloat(prompt("Enter End Number"));
    StartEnd(Start,End);
    console.log(numbersOdd);
});


function StartEnd(Start = 2,End){
    let n = 0;
    for(let i = Start ;i<=End; i++){
            if(i%2 != 0){
                console.log(i);
                numbersOdd[n] =i;
                n++;
            }
    }
}




// Assignment 07 

const btnEquation = document.getElementById("btn-equation");
const DisplayResult= document.getElementById("display-equation");


btnEquation.addEventListener("click",()=>{
    const rst = prompt("enter equation ? ");
    const lastResult = eval(rst);
    console.log(lastResult);
    DisplayResult.innerHTML = lastResult;
});





// Assignment 08
// Hook Elements
const btnContact = document.getElementById("btn-contact");
const userName = document.getElementById("username");
const birthDateUser = document.getElementById("birthdate-user"); 
const ageUser = document.getElementById("age") 

btnContact.addEventListener("click", () => {
    let nameUser = "";
    let birthDate = "";
    let flag = false;

    while(!flag){
        nameUser = prompt("enter Name ? ");
        if (typeof nameUser === 'string' && nameUser.trim() !== '') {
            flag=true;    
        }
    }
   
    flag = false;
    while (!flag) {
        birthDate = parseInt(prompt('Enter your birth year (less than 2010):'), 10);
        if (!isNaN(birthDate) && birthDate < 2010) {
          flag = true;
        }
    }
    let year = new Date().getFullYear();
    let ageUser = year - birthDate;
    userName.innerText += nameUser; 
    birthDateUser.innerText += birthDate;
    age.innerText += ageUser;
    
    console.log({"Name : ":nameUser},{"birdthDate : ":birthDate},{"Age : ": ageUser});
});



/*


    console.log({"Name : ":nameUser},
    {"birdthDate : ":birthDate},{"Age : ": Age});
    console.log(parseFloat(rst));

*/





















