

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
