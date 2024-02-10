// singleton - new object(),Object.create
// constructor method

// object-literals
const jsUsers={
    name:"vk",
    branch:'ece',
    1:'hello'
};
// keys must be unique and can be any primitive data type by default they are string, values can be anything primitive or non-primitive
console.log(jsUsers);


// how to access the elemenst of a object 
console.log(jsUsers.branch);
console.log(jsUsers["branch"]);
//you can use brackets also for all cases, but remember you can't use the "string Key " with dot operator 


// symbol in objects
let sym = Symbol("key1");//symbol take parameters of number and string 
let obj = {
    [sym]:8,
    name1: "vik"
}
console.log(typeof obj[sym]);


// changing values of elements of a object
obj["name1"]="kivi";
console.log(obj.name1);


// how to freeze the values 
Object.freeze(obj);
//dont allows us to make changes in obj , dont gives any error if we do it 





// ***************************
let newObj = {
    shivam:"chaurasia",
    chandu:90,
    vik:96,
};

console.log(newObj);
newObj.kartik=88;//way to insert data in objects
console.log(newObj);



// inserting functions in objects
newObj.greetings = () => {
    console.log("hello function inside a obj");
}
console.log(newObj);
newObj.greetings();


newObj.greetings2=function(){
    console.log(`hello ${this.shivam}`);
}

newObj.greetings2();


