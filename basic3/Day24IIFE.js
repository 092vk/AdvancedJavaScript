// immediately invoked function expressiosns(IIFE)

// Need:
/*
1.Pollution from global scope 
2.Immediate implementation
*/


const myname = "vk";
const arrow = ()=>{
    console.log(`name is ${myname}`);
}
arrow();


//IIFE
(function chai(){
    const naam = "vk";
    console.log(`name is ${myname}`);
    console.log(`name is ${naam}`);
    console.log("db is connected ");
})();
// ****here semi-colon is a must****



// iife is more useful in legacy code before ES6

// arrow iife 
((name)=>{
    console.log("hello arrow iife ");
    console.log("db is connected ");
    console.log(`my name is : ${name}`)
}
)("viek");



