let parentObject={
    first_name:'3bdallah',
    faculty_name:'Law',
    university_name:'Minya University',
    grade:99};

const DisplayPhrase = document.getElementById("show");

DisplayPhrase.innerHTML = `${parentObject.first_name} is a student in faculty of ${parentObject.faculty_name} in university ${parentObject.university_name}
And his final grad is ${parentObject.grade}.`








class Queue{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.items = [];
    }

    // to push on array 
    push(item){
        if(this.items.length <=this.maxSize){
            this.items.push(item);
        }else{
            console.log("is fully ");
        }
    }
    
    // to get last element
    top(){
        console.log(this.items[this.items.length-1]);
    }
    
    front(){
        if(this.items.length > 0){
            console.log(this.items[0]); 
        }
    }
    
    
    getQueueElements(){
        if(this.items.length > 0){
          for(let i =0;i<this.items.length;++i){
             console.log(this.items[i]);
          }
        }
    }

    viewQueue(){
        return this.getQueueElements();
    }

    clear(){
        if(this.items.length >0){
          this.items = [];
          console.log("your Queue now empty ");
        }
    }
    //  delete element  
    erase(){
       if(this.items.length >0){
          return this.items.shift();
       }
    }
  
    iseEmpty(){
        return this.items.length === 0;
    }

    size(){
        console.log(this.items.length);
    }
}



Queue.returnQueue = () => {
 return Queue.getQueueElements();
}



let newQueue = new Queue(10);

newQueue.push("firstItem");
newQueue.push("secondItem");
newQueue.push("thirdItem");
newQueue.push("fourthItem");
newQueue.push("fifthItem");
newQueue.push("lastItem");

console.log("front")
newQueue.front();
console.log("size")
newQueue.size();

console.log("top");
newQueue.top();
console.log("show elements")
newQueue.getQueueElements();

console.log("erase")
newQueue.erase();

console.log("front")
newQueue.front();

console.log("test view Queue");
newQueue.viewQueue();
