// create fucntion calcage
//  ** Create a function that takes the age in years and returns the age in days.
function handleAge(age) {
  if (!isNaN(age) && age > 0) {
    let numDays = age * 365;
    return numDays;
  } else {
    return "is Not Number ";
  }
}
const convertAge = handleAge;

console.log(convertAge(10));
console.log(convertAge(0));
console.log(convertAge("dcd"));

// ** Create a function that takes an array of numbers and returns the smallest number in the set.
function getSmallNum(items) {
  let bigNum = 9e10;
  if (items.length !== 0) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] < bigNum) {
        bigNum = items[i];
      }
    }
    console.log("small number", bigNum);
    return bigNum;
  } else {
    return "Your empty array ";
  }
}

const arrNum = [12, 3, 33, 4, -1, 0, -2];
getSmallNum(arrNum);

/* Create a function that takes any non-negative number as an array and return it with its digits in
// descending order. Descending order is when you sort from highest to lowest.  */

// used buble sort :)
function handlSort(itemsSort) {
  let lengthItems = itemsSort.length;

  //   check items have negitav number
  for (let n = 0; n < lengthItems; ++n) {
    if (itemsSort[n] < 0) {
      console.log("have negitve number ");
      return 0;
    }
  }
  for (let i = 0; i < lengthItems; ++i) {
    // complex n*n
    for (let k = 0; k < lengthItems - 1; ++k) {
      if (itemsSort[k] < itemsSort[k + 1]) {
        let glass = itemsSort[k];
        itemsSort[k] = itemsSort[k + 1];
        itemsSort[k + 1] = glass;
      }
    }
  }
  console.log(itemsSort);
}

handlSort([12, -4, 5, 6, 7, 8, 9]);

handlSort([12, 5, 6, 7, 8, 9]);
// console.log(handlSort([10, 32, 3, 3, 3, -1]));

// ** Create a function that takes an array of numbers and returns the average of this numbers.
function handleAvaregNum(items) {
  if (items.length) {
    let sumNums = items.reduce((acc, item) => acc + item, 0);
    console.log("averag mohamed ", sumNums / items.length);
    return sumNums / items.length;
  } else {
    return "Your items  array empty";
  }
}

handleAvaregNum([12, 4, 5, 6, 7, 8, 9]);

// check output
console.log([] == []); // false   -->> because they check if the two objects have the same reference in memory

console.log({} == {}); // false ->>  because they check if the two objects have the same reference in memory

function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
    setTimeout(function test2() {
      console.log("D");
    }, 0);
    console.log("F");
  }, 0);
  console.log("C");
}
main();
// A C B F D

var num = 10;
// console.log("result num", num);
var num = 8;
var num = 3;
console.log("result num", num);

function saHiy() {
  console.log("name", name); // init and it hosted undifinder
  console.log("age", age); //  not init but hosted  error
  var name = "3bdallah";
  let age = 23;
}
saHiy();
