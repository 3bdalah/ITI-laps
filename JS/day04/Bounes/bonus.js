// const name = window.prompt("enter your name");
// console.log("name",name);
// const mohmoud = document.querySelector('.mo');
// mohmoud.textContent = name;


//   tssd two 
const skills = document.querySelector(".skills");
const parentList = document.querySelector(".list-skills");
// const  sklill = document.querySelector('.skill');
const closeBtn = document.querySelectorAll(".close");
const togglePop = document.querySelector(".toggle-pop");
const emptyList = document.getElementById("empty-list");
//   
// let countChildsList =item.parentElement.childElementCount; 
closeBtn.forEach((item)=>{
  item.addEventListener("click",()=>{
    const itemSkill = item.parentElement;
    // itemSkill.classList.add("remove");
    parentList.removeChild(itemSkill);
    // console.log(itemSkill.textContent);
    //   itemSkill.remove(); 
    if(parentList.childElementCount == 1){
        console.log("greatest zero");
       emptyList.classList.add("show-error");
    }else{
        emptyList.classList.remove("show-error");
    }
    });
});

// function check numbe elements list 
function showEmptyList(){
    // parentList.removeChild(itemParent);
    console.log("number : ", countChildsList);
}

let flag = true;

togglePop.addEventListener("click", () => {
  togglePop.textContent = flag ? "open" : "close";
  
  if (flag) {
    flag = false;
    skills.classList.toggle("hide-skills");
    console.log("Open");
  } else {
    
    skills.classList.toggle("hide-skills");
    flag = true;
    console.log("Close");
  }
});



//  bonus Two 
// const showHead = document.getElementById("headScreen");
// for(let i=1;i<=6;i++){
//     let newElement = document.createElement(`h${i}`);
//     showHead.appendChild(newElement); 
// }