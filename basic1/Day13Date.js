// date and time are non-primitive data types 

let date = new Date();
console.log(date);
console.log(date.getTime());


console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toJSON());
console.log(date.getDate());
console.log(date.getDay());
console.log(`currently the month is : ${date.getMonth()+1}`);


// custom date 
let myCreatedDate = new Date(2023,5,21);
console.log(myCreatedDate.toDateString());
//*********date months are 0 indexed******/
let date1=new Date(2023,0,23,5,3);
console.log(date1.toString());
console.log(`currently the month is : ${date1.getMonth()+1}`);

let date2 = new Date("2023-01-14");
console.log(date2);//no 0 indexing here
let date3 = new Date("01-04-2023");//no 0 indexing here
console.log(date3);


//time , for making lets say some time related website like a quiz app
let myTime = Date.now();
console.log(myTime);

// comparing two time 
console.log(date.getTime()-myTime);

//consverting in seconds 
console.log(Math.floor(myTime/1000));



// to edit the output of locale string 
date2.toLocaleDateString('default',{
    month:"long",
    day:"2-digit"
});


