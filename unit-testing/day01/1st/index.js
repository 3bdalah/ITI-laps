const capitalizeText= (input)=>{

if(typeof input !=="string") {throw new TypeError("parameter should be string")};

return input.toUpperCase();
 }


 module.exports = { capitalizeText  }