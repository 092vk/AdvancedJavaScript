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
const obj = {
    name : "vievk",
    branch: "ece",
    marks:8.01,

    tellName:function(){
        return `my name is ${this.name}`;
        // if we dont use this keyword the compiler gets confused which name are you talking about 
    }
}

console.log(obj.tellName());

