// arrays are non-primitive data types , 

//declaring arrays of same type 
const myarray = [1,2,34,5,6,6];
console.log(myarray);

//declaring arrays with different data types 
const myarray2 = [1,"hello",true,1.2];
console.log(myarray2);

//arrays in js are resizable 

//**** all the built in copy functions which are used with js objects do shallow copy and not deep copy  */
// shallow copy ---> the copy share the same refrence point , if we change the copy the old original will also get affected 
//deep copy ----> an actual copy is created in memory , we change the new copy , old one won't get affected 



// shift and unshift , push,pop and join
console.log(myarray);
myarray.push("vivek kumar");
console.log(myarray);
myarray.pop();
console.log(myarray);

console.log(myarray2);
myarray2.shift();
console.log(myarray2);
myarray2.unshift("vivek kumar");
console.log(myarray2);

let mystring = myarray.join();
console.log(mystring);
console.log(typeof mystring);
console.log(mystring[0]+1);//will print 11

//slice and splice 
let newArray = ["a","b","c"];
console.log(newArray);
let newArray1 = newArray.slice(0,2);
console.log("originalArray after slice is - "+ newArray + " and slice is "+newArray1);
let newArray2 = newArray.splice(0,1);
console.log("the splice is : "+ newArray2 + " and the originanl array is : "+ newArray);
//splice changes the original array , like it cuts the array and also includes the last element 
//while slice only makes a copy of the original part of arary , it also does not include the last element 



