// assignment 01 
(() => {
    const firstNumber = 5;
    const secondNumber = 10;
    const sum = firstNumber + secondNumber;
    alert(sum);
})();


// assignemnt 02 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);



numbers.forEach(number => {
    if (number % 2 === 0) {
        console.log("Even Number:", number);
    }
});



const squares = numbers.map(number => number ** 2);
console.log("Squared Numbers:", squares);



// Demos
let elsayed = {
     regularFunction  : function() {
        console.log("Regular Func ----------> this:", this); // global  object
        
    },
    name: "Mohesen",
    childs : "mostafa",
     arrowFunction : () => {
        console.log("Arrow Func ------------> this:", this);
    }
};

console.log(elsayed.arrowFunction());
console.log(elsayed.regularFunction());




const colors = ['red', 'green', 'blue', 'yellow'];

console.log("Using for in :");
for (const index in colors) {
    console.log(index, colors[index]);
}

console.log("\nUsing for of :");
for (const color of colors) {
    console.log(color);
}



console.log("\nUsing .forEach() method:");
colors.forEach((color, index) => {
    console.log(index, color);
});



const tipsGenerator = function*() {
    const tips = [
        "Remember to back up your data regularly.",
        "Use strong and unique passwords for your accounts.",
        "Keep your software and operating systems up to date.",
        "Be cautious when clicking on links or downloading attachments.",
        "Enable two-factor authentication whenever possible.",
        "Be mindful of sharing personal information online.",
        "Regularly review your privacy settings on social media.",
        "Use a reliable antivirus and anti-malware software.",
        "Avoid using public Wi-Fi for sensitive activities.",
        "Don't ignore security warnings from websites or applications."
    ];

    for (const tip of tips) {
        yield tip;
    }
};

const displayBtn = document.getElementById("displayButton");
const intervalButton = document.getElementById('intervalButton');
const tipDisplay = document.getElementById('tipDisplay');

displayBtn.addEventListener('click', () => {
    tipDisplay.innerHTML = "";
    const tips = tipsGenerator();
    for (const tip of tips) {
        tipDisplay.innerHTML += `${tip}<br>`;
    }
});

intervalButton.addEventListener('click', () => {
    tipDisplay.innerHTML = "";
    const tips = tipsGenerator();
    const interval = setInterval(() => {
        const nextTip = tips.next();
        if (nextTip.done) {
            clearInterval(interval);
        } else {
            tipDisplay.innerHTML += `${nextTip.value}<br>`;
        }
    }, 3000);
});