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
console.log(mystring.valueOf());

console.log(typeof(mystring));
let mystring2 = "hello string";
console.log(typeof(mystring2));

console.log(mystring.length,mystring[0]);
console.log(mystring2.length,mystring2[0]);

//****** different functions of strings   ****/


let a = "vivek kumar";
console.log(a.length);
// console.log(a.length()); --> this is wrong , becuz length is not a function but a memeber or state of the string class 

 
let naam = "vivek";
let capitalName = naam.toUpperCase();
console.log("old : "+naam+" new :"+capitalName);
//so toUpperCase does not effect original str as the strings are primitive data types 

//to find the char by its index we can use charAt
let str0 = "vivek";
let charu = str0.charAt(1);
console.log(charu+" "+str0[1]);

//to find the index of first occ of a char
console.log(str0.indexOf('k'));
//0 based indexing


// substrings
const newString = "vivek-kumar";
let m = newString.substring(1,4);
console.log(m);
//gives me the substring according to given index and dont include the last value , so its kinda like that it will give you last element if you give input of string.length;


//slice
console.log(newString.slice(1,4));
//diff lies in negetive value handling while slice considers it as opp while subString considers it to be 0

console.log(newString.slice(-4,-2));
//index from back

//use trim to remove whiteSpaces and line terminators from start and end 
let nama = "   vivek   ";
let namaForm = nama.trim();
console.log(namaForm+" "+nama);

let url = "https://vivek.com/ spacehere hereToo";
console.log(url);
console.log(url.replace(' ','-'));
console.log(url.replaceAll(' ','-'));
//can be used to remove the whiteSpace 


console.log(url.includes("vi"));//true
//serches subString

// splitter
let splitter = "slpi-slofn-slfn-slm";
console.log(splitter.split('-'));//return array of string
console.log(url.replaceAll(' ','-').split('-'));




