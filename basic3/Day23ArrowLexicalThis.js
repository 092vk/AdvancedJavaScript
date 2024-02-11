// arrow function and this keyword 

let user = {
    username : "vivek",
    price : 999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome`);
        console.log(this);
    }
    // in objects , the methods can't acess the attributes directly , but we have to use **this(keyword )**, to acess the attribute in current context

};

user.welcomeMessage();

user.username = "shivam";
user.welcomeMessage();

// this is why this is important , it tells that acess but in current context, we can;t write the name of varibale ,directly as then we will not be able to change the value , this is important , as the context of object is important 


console.log(this);//this wil give empty object here as we are running this in node , but if we run it in browser we will get window object 
// same thing we get when used with arrow function, as arrow function is taking context from global 



// *********arrow functions ******************


// can we use this in functions
function chai(){
    let user = "hiteshSir";
    console.log(this);//lots of data 
    console.log(this.user);//undefined
}
chai();


// same with anonymus function
const chai2 = function(){
    let user ="vievk";
    console.log(this);
    console.log(this.user);//undefined
}
chai2();
//******we are getting value of this as normal functions have their own this ********


//arrow function
const chai3 = ()=>{
    let user ="vk";
    console.log(this); //undefined
    console.log(this.user);//undefined
}
chai3();


// return and implicit return 
const add = (a,b)=>{
    return a+b;
}
console.log(add(1,2));

const add2= (a,b)=>a+b;
console.log(add2(2,3));

const add3 = (a,b) => (a+b);
console.log(add3(2,3));

//now lets say i have to return a object from the function 

const obji = ()=>{
    return myobji2={
        user:"viek",
        branch:"ece"
    };
};
console.log(obji());

//using arrow function
const obji1 = ()=>({user:"name"});//*** used in react*** */
console.log(obji1());


// difference betweeen arrow and normal functions 
// arrow functions does not have its own this , it takes it from the surrounding , while noraml functions have their own this and does not take it from thier surrounding 
// ******this is called as lexical this **********

