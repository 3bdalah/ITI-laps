function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in successfully!');
  }

  window.addEventListener('load',  () => {
    
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      
      document.getElementById('username').value = savedUsername;
      document.getElementById('password').value = savedPassword;
    
      document.getElementById('rememberMe').checked = true;
    }
});



// assignment 02 
// ceate Json file 
const student = {
    id : 1,
    name:"Mostafa",
    age:23,
    address : "New Ciaro, Cairo , Egypt",
    skills: ["html","css","redux","sass","jquery","f***JS"],
    isLeader: true,

};

const ID = document.getElementById("id");
const address = document.getElementById("address");
const age = document.getElementById("age");
const skills = document.getElementById("skills");
const isLeader = document.getElementById("isLeader");

ID.textContent += student.id;
address.textContent += student.address;

age.textContent += student.age;

// ID.textContent += 
student.skills.forEach((skill)=>{
    const span = document.createElement("span");
    span.textContent = skill;
    span.setAttribute("class","skill")
    skills.appendChild(span);
});
isLeader.textContent += student.isLeader;
// ID.textContent = student.id;

// console.log("student Object : " , student);



const students = [{
    id : 1,
    name:"Mostafa",
    age:23,
    address : "New Ciaro, Cairo , Egypt",
    skills: ["html","css","redux","sass","jquery","f***JS"],
    isLeader: true,

},
{
    id : 2,
    name:"Ali",
    age:33,
    address : "Ashmoon, Almonufia , Egypt",
    skills: ["coder","Algrothim","compitetive Programming","c++"],
    isLeader: false,

},
{
    id : 3,
    name:"Amr",
    age:31,
    address : "Aswan, Aswan , Egypt",
    skills: ["html","css","GulpJS","Git","jquery","ReactJS"],
    isLeader: false,

},
{
    id : 4,
    name:"Youssef",
    age:23,
    address : "New Ciaro, Cairo , Egypt",
    skills: ["html","css","Mtreial UI","Telwaind","Bootstrap","AngularJS"],
    isLeader: true,

},];


const displayStudents = document.getElementById("display-students");

students.forEach((studentChild) => {
    const p = document.createElement("p");
    p.textContent = "Name : "+studentChild.name;
    displayStudents.appendChild(p);
    
    studentChild.skills.forEach((skill)=>{
        const span = document.createElement("span");
        span.textContent = skill;
        span.setAttribute("class","skill")
        displayStudents.appendChild(span);
    });
})
console.log("display all student on  array students", students);



const users = "https://reqres.in/api/users";
const user = "https://reqres.in/api/users/1";
const listSelected = document.getElementById("list-name");
const cardUSer = document.querySelector(".card-user");
// const selectedElement = document.createElement("select");
window.addEventListener("load", async()=>{
    const data_user =  await fetch(user).then((response) => response.json());
    // console.log("user data : ", data_user);

    const data_users = await fetch(users).then((response) => response.json());
    const dataUsersSelection = data_users.data;
    // console.log("users data : ",dataUsersSelection);
    for(let item of dataUsersSelection){
        // dataUsersSelection((option)=>{
            console.log("item",item);
             listSelected.innerHTML += `<option class="select-user">${item.first_name}</option>`
        // })
    }
    const afterSelected = listSelected.querySelectorAll(".select-user");
    
    listSelected.addEventListener("change",(e)=>{
    //    console.log("event",e.target.value);
       let UserAvatar = dataUsersSelection.filter((item) => item.first_name === e.target.value)
    //    const spreadtUserAvatar = [...UserAvatar];
    //    console.log(...spreadtUserAvatar);
       cardUSer.innerHTML = `<h2>${UserAvatar[0].first_name}</h2>
       <img src="${UserAvatar[0].avatar}" alt="avatar user" />`;
       
    })

    

})