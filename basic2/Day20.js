// making functions when we dont know the number of parameters --> usually used in shoping cart websites


// rest and spred operators

function calculateCartPrice(...items){//rest operator
    //we dont know how many arguments will be there 
      return items;
}

let itemsPrice = calculateCartPrice(1,2,3,44,56,6,7);
console.log(itemsPrice);

let myarray=[2,3,4,5,6];
let item1 = 100;
let item2 = 200;
let itemPriceArray=calculateCartPrice(item1,item2,...myarray);
console.log(itemPriceArray);
//spread operator




// objects in functions
let obj = {
    username: "vk",
    branch : "ece"
}
function myobj(myobject){
    return `inside this object the username is ${myobject.name} sorry the name is ${myobject.username} and his branch is ${myobject.branch}`
}

console.log(myobj(obj));
// remember to check the type of argumenst and if they are empty , this is one of the reasons why people love typescript


// **********other way to pass object*********Important***
let result = myobj({
    username:"guest",
    branch:"cse"
});
console.log(result);


// passing arrays in function
let nums = [1,2,3,4,5];
function array(myarray){
    return myarray[0];
}
let newNums = array(nums);
console.log(newNums);


