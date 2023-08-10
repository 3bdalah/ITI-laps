// assignment 01 
(() => {
    const firstNumber = 5;
    const secondNumber = 10;
    const sum = firstNumber + secondNumber;
    alert(sum);
})();


// assignemnt 02 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using Array.filter() with an arrow function to return odd numbers
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

// Using Array.forEach() with an arrow function to print even values
numbers.forEach(number => {
    if (number % 2 === 0) {
        console.log("Even Number:", number);
    }
});

// Using Array.map() with an arrow function to print the square of each element
const squares = numbers.map(number => number ** 2);
console.log("Squared Numbers:", squares);

// Demo to explain the difference in 'this' context between arrow and regular functions
const regularFunction = function() {
    console.log("Regular Function - this:", this);
};

const arrowFunction = () => {
    console.log("Arrow Function - this:", this);
};

regularFunction(); // 'this' refers to the calling context (usually the global object)
arrowFunction();  // 'this' refers to the surrounding lexical scope (where the arrow function was defined)



const colors = ['red', 'green', 'blue', 'yellow'];

// Using for...in loop to iterate over array indices
console.log("Using for...in loop:");
for (const index in colors) {
    console.log(index, colors[index]);
}

// Using for...of loop to iterate over array elements
console.log("\nUsing for...of loop:");
for (const color of colors) {
    console.log(color);
}

// Using .forEach() method to iterate over array elements
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

const displayButton = document.getElementById('displayButton');
const intervalButton = document.getElementById('intervalButton');
const tipDisplay = document.getElementById('tipDisplay');

displayButton.addEventListener('click', () => {
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