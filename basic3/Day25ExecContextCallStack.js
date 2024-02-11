// JavaScript Execution Context
// how js runs the code

// 1. Global Execution Context(this)
// in browser this= window , in node it is empty object , *** in server side you dont have access to window *****

// **js is single threaded

// 2. Function execution context
// 3.eval Execution context


// how code runs 
// 0.Global Execution
// 1. Memory creation phase  --> memory allocation
// 2.Execution phase 


let val1 = 10;
let val2 = 20;
function addNum (num1,num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1+val2);
let result2 =addNum(10+2);


// how the code runs 

// 1.Global COntext creation (this)
// 2.Memory phase 

//     val1 = undefined
//     val2 = undefined
//     addNum = defination of function
//     result1 = undefined
//     result2 = undefined

// 3.Execution Phase 
//     val1 = 10;
//     val2 =20
//     addNum(function) --->1.New variable environment
//                             +execution thread
                        
//                         2.memory allocation
//                         val1 = undefined 
//                         val2 = undefined 
//                         total = undefined

//                         3.Execution phase 
//                         num1 = 10;
//                         num2 = 20;
//                         total = 30;

                        // 4.Deletion of function thread and return to global context

//     addNum(2+10) -->    1.New Execution context and environment
//                         2.
//                         3.






// call stack 
function one(){
    console.log("one");
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
one();
two();
three();

// inside call stack one will insert first and then it will be implemented and poped 
//then same with two and three functions


// function one1(){
//     console.log("one1");
//     function two2(){
//         console.log("two2");
//         function three3(){
//             console.log("three3");
//         }
//     }
// }


function one1(){
    console.log("one1");
    two2();
}
function two2(){
    console.log("two2");
    three3();
}
function three3(){
    console.log("three3");
}
one1();


// here call stack --> first one will be inserted and then two and then three , 
// once three ends it will come out followed by two and one 
// the call stack follows the principle of stack(LIFO)

