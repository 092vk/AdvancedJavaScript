console.log("hello world");

// is js a oop language - no and yes technically , it is a prototype-based language and even though it has classes which was introduced in EM6 , its classes are primarily just syntactic sugar over existing prototype-based inheritance mechanism, which means it might appear to be object oriented and does have classes , but inside the hood it is prototype-based only.


// OOP s
// everything is a object --> object -> 1.it is a collection of properties or attributes and methods 


// why use oops -> to avoid spheggeti code and messy code which are not reusable 

// parts of oops 
// 1.object literal 


// --> constructor function
// -->Prototypes 
// -->Classes 
// -->Instances (new,this)


// pillars of oops 
// 1.abstraction == hide the details 
// 2.encapsulation == capsulate some attributes or properties and methds
// 3.Inheritance == pass the class properties and methods to other functions 
// 4.polymorphism == poly - many , morphism - forms , which means same thing in different forms 



// objects - literals 
const obj1 = {
    name : "vievk",
    branch: "ece",
    marks:8.01,

    tellName:function(){
        console.log(this);
        return `my name is ${this.name}`;
        // if we dont use this keyword the compiler gets confused which name are you talking about 
    }
}

console.log(obj1.tellName());


// lexical this in global context 
console.log(this)
//here it will give output of empty object , but when in browser it will give the output of window and its methods and attributes 



// now lets make a new user2
const obj2 ={
    name : "vievk",
    branch: "ece",
    marks:8.01,

    tellName:function(){
        return `my name is ${this.name}`;
    }
}

// now this is cucumbersome and time consuming , so what to do if we want to make many instances of same class , for this we make class and constructor functions


// constructor function
function user(name , loginCount ,isLogged){
    this.name = name;
    this.loginCount=loginCount;
    this.isLogged =isLogged;

    // method
    this.greeting=()=>{
        console.log(`hello ${this.name}`);
    }

    return this;
    // optional : it is returned by default 
}

const userOne = user("vivek",1,true);
const userTwo = user("shivam",2,false);

console.log(userOne);
console.log(userTwo);
console.log(userOne);//value changes , different values for different users is not maintained 
// both of them will give complete object, same one

// to avoid this and maintain function value for each user separately , we use new , this will preserve value for each user in new context

const user1 = new user("vivek",1,true);
const user2 = new user("shivam",2,false);
console.log(user1);
console.log(user2);
console.log(user1);
// now the value for each user is preserved in its context



// new keyword 
// 1.new empty object is formed 
// 2.a constructor function is called 
// 3.constructor function injects all the variables in this context
// 4.it returns the value

console.log(user.constructor);
// learn about instance of 