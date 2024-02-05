//older version of strings 
let value = 22;
let str = " vivek kumar";
console.log(value + str + " is my age ");
//this is very confusing so we use newer backticks 

//newer style of writing complex string 
//this is also called string interpolation 
console.log(`so we are in a string , and this is a value ${value} and this is a str - ${str}`);

//this will be helpfull if we want to apply additional logic on value or str and is also ,more redable 

// string functions 
let mystring = new String("hello str");
//this is a way of creating a new object in js 
console.log(mystring);
console.log(typeof(mystring));
let mystring2 = "hello string";
console.log(typeof(mystring2));

console.log(mystring.length,mystring[0]);
console.log(mystring2.length,mystring2[0]);

