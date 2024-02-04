// data types in js are divided into 2 types based on how they are stored and accessed 

// 1.Primitive --> call by value
// 2.Non- Primitive(Reference types) -->arrays , objects and functions

//remeber the class name of different data types starts with capital letters 

//symbol : they are used in react js , and other adv frontend libraries to make the componenets unique 
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);//false


// ************** Non - Primitive*************
//arrays
let myarray = [1,2,3,"vievk"];
console.log(myarray);
//neither the arrays of js store same type of data , neither they are fixed in size .

//objects 
let obj = {
    name : "vievkKumar",
    class : "ece",
    roll : 92
};
console.log(obj);
console.log(obj.roll);

//functions
let myfunc = function(){
    console.log("i am inside a function");
}
myfunc();
console.log("the type of myfunc is - "+ typeof(myfunc));

//arraow function expression 
let arrowfunc = ()=>{
    console.log("i am inside a arrow function");
}
arrowfunc();
console.log("type of arrowFunc - " + typeof(arrowfunc));


 
