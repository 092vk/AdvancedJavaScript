// dom selectors , html collections and mode lists 

//document.getElementById('id_value');
//document.getElementsByClassName("value");
//document.getElementsByTagName("value");
//document.getElementByName("value")


//document.querySelector('h2');
//document.querySelectorAll('h2');
//document.querySelector('.className');
//document.querySelector("#idName");
//document.querySelector("input[type="password"]);


// document.getElementById('value').getAttribute('gg')
// document.getElementById('value').id
// setAttribute('class','test oldOne');



// NodeList--***
// nodeList--> querySelectorAll , a object dataType in DOM
//HTMLCollections --> getElementsByClassName , a object dataType in DOM


const tempList = document.querySelectorAll('li');
// this will create a nodeList
console.log("hello")
console.log(tempList);
console.log("hello again");


// nodelist has forEach function 

// to convert nodeList into array 
const arraylist = Array.from(tempList);
console.log(arraylist);



// htmlCollections unlike their cousins nodelist does not have forEach , so we have to convert htmlCOlections into arrays to itterate over them 

console.log(arraylist);
const temp = arraylist.map((item)=>{
    return item*item;
})
console.log(temp);

