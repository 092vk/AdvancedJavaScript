
const num = 10000.888;
console.log(num);

const num2 = new Number(100);
console.log(num2);
console.log(num2.valueOf());


// Numbers methods 
// 1. to string 
let strNum = num2.toString();
console.log(`${num2} is a ${typeof(num2)}`);
console.log(strNum.length);

// 2.toFixed-the number of decimals after point , rounds of the last digit
console.log(num.toFixed(2));
console.log(typeof(num.toFixed(2)));//returns string 

// 3.toPrecision - total number of precision digits and rest are rounded of , 
console.log(num.toPrecision(4));//return string

// 4.toLocaleString
const hundreds = 1000000;
console.log(hundreds.toLocaleString());//converts it into a string with commas with respect to number sysytem 


// *********Maths Library ***********
// it is a built in libraray

console.log(Math);
console.log(Math.PI);

console.log(Math.log(Math.PI));
// PI is a attriute while log is a method 


// 2.abs(),round(),ceil(),floor()
console.log(Math.abs(-6));
console.log(Math.round(2.5));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.9));



// 3.min and max
console.log(Math.min(2,1,3,0));
console.log(Math.max(2,1,3,0));


// 4.random
console.log(Math.random());//generates random number between 0(inclusive) and 1 ;

// getting a random number b/w any two numbers
let min =10;
let max =20;
let randNum = (Math.random()*(max-min))+min 
console.log(randNum);


// getting a random integer b/w any two values
let newMin = Math.ceil(min);
let newMax = Math.floor(max);

console.log(Math.floor(Math.random()*(max-min)+newMin));


// getting a random integer b/w any two numbers both inclusive
console.log(Math.floor(Math.random()*(newMax-newMin+1)+newMin));



