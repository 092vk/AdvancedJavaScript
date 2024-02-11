// closures 

function outer(){
    let text = "i am outer ";
    function inner(){
        let text2= "i am inner";
        console.log(text);
    }
    // console.log(text2); you can;t access that variable 
    return inner;
}

let closure= outer();
closure();
// only inner function can access the outer but not true vice-versa 




// *************intresting ************

//hoisting 

console.log(increment(5));
// *****
function increment(value){
    return value+1;
}
// ******
console.log(increment(5));


// same but with expression
// console.log(myfunc(5));---> ????
// ***********
const myfunc = function(value){
    return value+1;
    //anonymous functions
}
// ***********
console.log(myfunc(5));


// Hoisting - all function definations are hoisted at the top of global context while compilling 
// this hoisting of functions is called hoisting in js 
// this allows us to call functions before they are declared or defined 
// but such behaviour is not possible for function expressions or other type of anonymous functions like arrow functions 


