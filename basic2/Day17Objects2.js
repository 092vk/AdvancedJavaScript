// singleton or constructor object


let tinder = new Object();
console.log(tinder);

tinder.id="abc123";
tinder.sex='male';
console.log(tinder);


// object inside object
let mybubble = {
    name : "xx",
    age:"xx",
    goodies : {
        behaviour: "good",
        habits: "excellent"
    },
    tram:"kolkata"
}

console.log(mybubble.goodies.behaviour);


// joining two objects
let obj1 = {
    1:"a",
    2:"b"
};
let obj2={
    3:"t",
    4:"f"
};
let obj3 = {obj1,obj2};
console.log(obj3);
// we dont want this , as here the objects are becoming elements themselves 

let obj4 = Object.assign({},obj1,obj2);
console.log(obj4);


// spread operator 
let obj5 = {...obj1,...obj2};
console.log(obj5);


// arrays of objects
