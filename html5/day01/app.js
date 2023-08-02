// const boxImgs = document.getElementById("box-imgs");
var DragItem;
const dragBox = document.getElementById("drag-box");

const dragBoxBottom = document.getElementById("drag-box-bottom");
const dragBody = document.getElementById("drag-body");
const imgs = document.querySelectorAll(".img");

imgs.forEach((img) => {
    img.addEventListener("dragstart", (e)=>{
         startDrag(e.target);
    });
})

function startDrag(thisItem){
     DragItem = thisItem;
}

dragBox.addEventListener("dragover",(e)=>{

    e.preventDefault();
})
dragBox.addEventListener("drop", (e)=>{
    e.target.appendChild(DragItem);
});

dragBoxBottom.addEventListener("dragover",(e)=>{

    e.preventDefault();
})
dragBoxBottom.addEventListener("drop", (e)=>{
    e.target.appendChild(DragItem);
});

// dragBody.addEventListener()

dragBody.addEventListener("dragover",(e)=>{

    e.preventDefault();
})
dragBody.addEventListener("drop", (e)=>{
    e.target.appendChild(DragItem);
});
