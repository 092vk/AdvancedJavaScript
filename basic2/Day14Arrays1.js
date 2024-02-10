// arrays are non-primitive data types , 

//declaring arrays of same type 
const myarray = [1,2,3,4,5,6,6];
console.log(myarray);

//declaring arrays with different data types 
const myarray2 = [1,"hello",true,1.2];
console.log(myarray2);

//arrays in js are resizable 

//**** all the built in copy functions which are used with js objects do shallow copy and not deep copy  */
// shallow copy ---> the copy share the same refrence point , if we change the copy the old original will also get affected 
//deep copy ----> an actual copy is created in memory , we change the new copy , old one won't get affected 

let array = new Array(2,13,6,7,"hi");
console.log("this is an array object : "+array);

// shift and unshift , push,pop and join
console.log(myarray);
myarray.push("vivek kumar");//adds element at last
console.log(myarray);
myarray.pop();//removes last element 
console.log(myarray);

console.log(myarray2);
myarray2.shift();
console.log("after shift: " + myarray2);//removes first element
myarray2.unshift("vivek kumar");
console.log("after unshift : "+myarray2);//insert at first


//includes
console.log(myarray.includes(1));//seacrches 1, returns boolean value

//indexOf
console.log(myarray.indexOf(1));//returns index of given numebr , if not found returns -1


let mystring = myarray.join();//converts the array into a string and bind them with a separator default ','
let mystring2 = myarray.join('-');//converts arrays elements into a string where the elements are joined by the given parameter separator 
console.log(mystring2);
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
