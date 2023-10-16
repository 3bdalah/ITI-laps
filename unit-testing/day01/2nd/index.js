const createArray = (number) => {
    const myArray = Array.from(Array(number).keys());
    return myArray;
  };
  
  module.exports={
    createArray:createArray
  }