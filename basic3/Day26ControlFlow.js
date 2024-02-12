

// learnt if else if statements 
// learnt about different conditional and logical opeartors 


// switch statements , many if elese if statements 

let key =1;
switch(key){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log(key);
        break;
    default:
        console.log(key);
        //DEFAULT runs only when none of the options are correct
}


// when key is string 
let month = "jan";
switch(month){
    case "jan":
        console.log("jan");
        break;
    
    case "feb":
        console.log("feb");
        break;
     
    case "march":
        console.log("march");
        break;
        
    default :
        console.log("it is the default month ")    
}
// switch statements are used in jQuery



// truthy and falsy values 

// how to check if a array/object is empty
let array=[];
let obj = {};
if(array.length==0){
    console.log("the array is empty");
} 
if((Object.keys(obj)).length==0){
    console.log("the obj is empty");
}



// miscillanneous comparisons 
console.log(false == 0);//true
console.log(false == "");//true
console.log("" == 0);//true




// null coalesing operator(??) : null undefined 

let var1;
val1 = 4 ?? 10;
console.log(val1);
val1 = 10??4;
console.log(val1);
val1 = 4??null;
console.log(val1);
val1 = null ?? 4;
console.log(val1);

// used when we are getting two values and we want the non-null value 

// one side null and other side data from api or db , to get null in case of geting falsy values //undefined is alos used 




// ternary opearator 
// condition ? first : second
let value = true;
value?console.log("true"):console.log("false");

