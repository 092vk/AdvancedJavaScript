

// the problem - we want to return some value from the callback function used in forEach loop , but we can't do i t ,


let nums=[1,2,3,4,5,6];
const value = nums.forEach((item)=>{
    return item;
})

console.log(value);



// filter operator
let mynums = [1,2,3,4,5,6,7,8,9,10];
let subarray =mynums.filter((item)=>item >5);
console.log(subarray);

// remember if you open a curly bracket and make a scope you have to use return keyword to return value 



// filter using for of opeartor 
let newNums=[];
for(const i of mynums){
    if(i > 5)newNums.push(i);
}
console.log(newNums);


// filter using forEach loop
let newNums2 =[];
mynums.forEach((item)=>{
    if(item>5)newNums2.push(item);
})
console.log(newNums2);




let mybooks=[
    {
        name:"one",
        price:90,
        year : 2001
    },
    {
        name :"two",
        price:99,
        year:2002
    },
    {
        name:"three",
        price:88,
        year:2000
    }
];
let myfilter = mybooks.filter((items)=>{
    return items.year >= 2001 && items.price <=95;
})//filter operator filters the original array and returns a subset which follows the condition
console.log(myfilter);






// map operator 
let myNumber = [1,2,3,45,6,7,8];
const myresult = myNumber.map((item)=>{
    return item+10;
})
console.log(myresult);//here we have created a new array for storing results after performing the func , ans hence the original array is as it is 
console.log(myNumber);


//map operator performs some opeartions on each of the elements and return a new array with result 




// **multiple nested filters , maps**

let result2 = myNumber.map((num)=>num*10).map((num)=>num+1).filter((nums)=>nums>=40); 
console.log(result2);






// reduce operators 
const mynumi = [1,2,3,4];
const total = mynumi.reduce((acc,currVal)=>{
    console.log(`acc:${acc} and curval:${currVal}`);
    return acc+currVal;
},3)//***acc initial value is 3***
console.log(total);

// reduce is a operator that takes a callback function and initial value of a varibale called accumulator , it then performs some opeartion between accumulator and each and every element in array and it all gets accumulated in acccumulator at in final varibale to whihc it is assigned 


// uses : lets say you have a shoping object list and you want to perform sum on each and every element 



// ****** short form using arrow func********
let total2 = mynumi.reduce((acc,val)=>acc+val,2);
console.log(total2);//shorter form 



let myCourse = [
    {
        courseName :"js",
        coursePrice : 33
    },
    {
        courseName :"py",
        coursePrice : 33
    },
    {
        courseName :"java",
        coursePrice : 33
    },
    {
        courseName :"web dev",
        coursePrice : 33
    },
];

let priceToPay = myCourse.reduce((acc,item)=>acc+(item.coursePrice),0);
console.log(priceToPay);


