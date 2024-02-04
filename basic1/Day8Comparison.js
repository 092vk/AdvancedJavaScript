//comparisons between data of same and different data types 

console.log("2">1);//true 
console.log("2"==2);//true 

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true ?? -->comparison equality operators convert null to 0

console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined < 0);
//algo behaviour is different for different types of data types be carefull


//strict check and equality 
console.log(2==="2");
console.log("0" === 0);
//checks data types and value both 
