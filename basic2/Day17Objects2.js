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
const myobji = [
    {
        name : "hell",
        class:"beauty"
    },
    {
        name : "hell1",
        class:"beauty1"
    }
];

// we can use loops to itterate over each object in array 
console.log(myobji[0].name);
console.log(myobji[1].name);


// ************Important***********
// to get an array of all the keys of an object or value 
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));


console.log(Object.entries(tinder));
//makes each key-value pair a element in a array


// to check if a key is present or not
console.log(tinder.hasOwnProperty("sex"));//returns true 



