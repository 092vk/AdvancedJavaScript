// object Destructuring , it is used a lot in react and apis

const course = { 
    courseName:"js",
    teacherName:"hitesh",
    price:100
};

// get the price fron the object
console.log(course.price);

//but this is hectic , instead we will use destructuring 
const {price,courseName:naam} = course;
console.log(price);
console.log(naam);

// use in react
/*
const navbar = ({company})=>{
    // here i am gettimg company from hitesh object
}
navbar(company = hitesh);

*/



// API - connects two websites
// we get resutls from apis in form of json and sometimes in array of json

// json is just js object without name 

{
    "name":"vk",
    "class":"ece",
}

//or

[
    {},
    {},
    {}
]

