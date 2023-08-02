

const circle = document.getElementById("circle");
const childCircle = document.getElementById("child-circle");

circle.addEventListener("mouseover",() => {
    // childCircle.style.cx  ="20";
    // childCircle.style.cy  ="50";
    childCircle.style.fill  ="red";
    console.log("Mouse over");
});


circle.addEventListener("mouseout",() => {
    // childCircle.style.cx  ="20";
    // childCircle.style.cy  ="50";
    childCircle.style.fill  ="yellow";
    console.log("Mouse OUT");
});
circle.addEventListener("mousedown",() => {
    childCircle.style.cx  ="80";
    childCircle.style.cy  ="59";
    childCircle.style.stroke  ="blue";
    console.log("Mouse Down");
    // childCircle.style.strokeWidth  ="red";
    // childCircle.style.fill  ="red";
    
});


circle.addEventListener("mouseup",() => {
    alert("your Mouse Now Up");
});







const boxImg = document.getElementById("box-img");
const emoje= document.getElementById("emoje");

boxImg.addEventListener("mouseover",()=>{

    emoje.setAttribute("src","./media/smiley.png")

});
boxImg.addEventListener("mouseout",()=>{

    emoje.setAttribute("src","./media/sad.png")

});




 // Get the canvas element and its context
 const canvas = document.getElementById("avatarCanvas");
 const ctx = canvas.getContext("2d");

 // Function to draw the avatar
 function drawAvatarWithText(username) {
   // Clear canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Draw the circle with semi-transparent fill
   ctx.beginPath();
   ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
   ctx.fillStyle = "rgba(255, 3, 0, 0.5)"; // Semi-transparent red color
   ctx.fill();

   // Write the name inside the circle with gradient color
   const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
   gradient.addColorStop(0, "white");
   gradient.addColorStop(1, "purple");
   ctx.fillStyle = gradient;
   ctx.font = "36px Arial";
   ctx.textAlign = "center";
   ctx.textBaseline = "middle";
   ctx.fillText(username, canvas.width / 2, canvas.height / 2);
 }

 // Set the username and draw the avatar
 const username = "3bdallah";
 drawAvatarWithText(username);


 