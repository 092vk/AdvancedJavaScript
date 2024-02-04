// conversion of data type in js or type coersion ---> NightMare topic 

let num = 3;
console.log(num,typeof(num));

let numString = String(num);
console.log(numString+" - "+ typeof (numString));

//type of NaN
console.log(typeof(NaN));
let newNum = "3a";
let newNum2 = Number(newNum);
//we are expecting some kind of error
console.log(newNum2+" - "+typeof(newNum2));
//careful about this , non number is being converted into NaN but its type is showing number 


//null type coersion into number , suppose you are taking input of temperature in string and then converting into number and mathing it with 0 
let temp = null
console.log(temp);
let temp2 = Number(temp);
console.log(temp2 +" and its type is "+ typeof(temp2));
//it is converting null into 0 , which can be a bug

//converting 
// 0."22"      ->number ->22
// 1.undefined ->number ->NaN;
// 2.true      ->number ->1
// 3."abcd"    ->number ->NaN

//boolean ---> truthy and falsy values in js 
let booli = -1;
let mybool = Boolean(booli);
console.log(mybool);

// falsy values ---> 0,NaN,undefined , false ,empty string 

let a = 22;
let b = String(a);
console.log(b + " - type of "+ typeof(b));

