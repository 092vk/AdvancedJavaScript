// js has a prototypal behaviour 

// **arrow key does not have the acess to this keyword , 
// -->arrow functions capture or take value of its this keyword from the enclosing scope, while regular functions bind their this to the object that calls them during runtime 


// prototype 
const arr =[1,2,3,4];
console.log(arr);


// 1.each object in js is associated with a prototype object
// 2.prototype objects is a rehular object that has methods and attributes 
// 3.the elements in js inherit their properties from their prototype object
// 4.OBJECTS in js are connected through a prototype chain , when you try to access the attributes or methods of a element , js looks for that in scope of object itself , but on not finding it, it keeps moving upward scope to find , untill and unless you hit a null;** this is called as prototype chain 


// 