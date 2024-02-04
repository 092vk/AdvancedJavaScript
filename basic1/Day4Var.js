const naam = "vivek kumar";
var roll = "22bec092";
let className = "ece";//remeber the variable name "class" is a reserved keyword in js , you can't use it 
city = "patna";

console.table([naam,roll,className]);

// naam = "shivam"; ** can't change it as it is a const value 
console.log(naam);


//changing values 
roll = "11";
className = "cse";
city = "jaipur";

console.table([roll,className,city]);
 
//as we can see , we can change values of var,let keyword declared variables , var is old method which don't care about the block , so it's use should be avoided , and let should be used more often together with const 

//what about declaring without any keyword - if you declare variable without any keyword 
//1.if it is declared without any scope then it is global 
//2.but if it is declared inside a scope it will remain inside that block 


let crushNaam;
console.log(crushNaam);
//this gives undefined 



//only use let and const in js 
