
// array specific loops

// 1.for of loops
let array =[1,2,9,7,6,54,3,2];
for(const num of array){
    console.log(num);
}


let str = "vivek kumar";
for(const s of str){
    console.log(s);
}


// Maps
const map = new Map();
map.set('IN','INDIA');
map.set('USA',"united states of america");
console.log(map);
// map consists of unique keys which have values . they maintain the order in which data was inserted in them , maps are also not indexed 



// loops on map
for(const [key,value] of map){
    console.log(key +" + " +value);
}



// itterating through a object 
let obj ={
    1:"one",
    2:"two",
    3:"three"
}
// for(const {key,value} of obj){
//     console.log(key,value);
// }


// *****obj iss not itterabale using simple loops like for , while(objects are not indexed) and for of  , they are itterated using special methods *******


let lang ={
    c:"c",
    cpp:"c++",
    py:"python",
    js:"javaScript"
}
for(const val in lang){
    // val will be just keys , 

    console.log(`keys : ${val} , values:${lang[val]}`);

}
console.log(lang.cpp);//this mehod does not work in for in 
// console.log(lang[c]);//this method works only in for in 




// using for in to itterate ararys and maps

let roll =[90,91,92,93];
for(const i in roll){
    console.log(i);
}
//for in - on ararys prints keys or indices of array


// for in - on map 
let mapi = new Map();
mapi.set(1,"one");
mapi.set(2,"two");
console.log(mapi);
for(let j in mapi){
    console.log(j);
}//this will not work on maps




//***************the difference between for in and for of lies in on they itterate over , for of itterate over every itterables(arrays , maps, sets ,string , nodelist etc) , and it itterates each elements of the itterable ,it does not work with objects as objects are not itterable . */

/***********for in is used to ittearte over the properties of an object , it is generally used for itterating object elements  */ 




/**********
 *maps v/s objects 
 1. maps - keys can be any primitive data type , while objects can only have string or symbol keys 

 2.key order is imporatnt in maps , while such is not a case in objects 

 3.you can get no of elements in map by using size property , but to get the no of elements in a object you have to use the size property on ararys.keys 

 4.map is itterable , while obects are not itterable ,we use for of for maps while we use for in for objects 

 5.removing and adding values is easy in map , while it is hard in objects 


//  NAN's are not equal to each other 

 *  *********/ 








// for each loop
let heroes=['captain america','ironman','spidey','black widow'];
heroes.forEach((element)=>{
    console.log(element.toUpperCase());
})





// passing a function as a parameter to forEach loop

function toLower(element){
    console.log(element.toLowerCase());
}
heroes.forEach(toLower);
//***** here we are giving function refrence as parameter , and not whole function ****/




heroes.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


// arrays of objects 
let myLang =[
    {
        langName:"javaScript",
        langFile:"js"
    },
    {
        langName:"java",
        langFile:"jv"
    },
    {
        langName:"python",
        langFile:"py"
    }
];

myLang.forEach((item)=>{
    console.log(item.langName);
})




