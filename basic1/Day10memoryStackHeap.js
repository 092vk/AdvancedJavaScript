//stack (primitive) ---> gives you copy of memory 
//queue (Non - primitive ) ---> gives you reference of memory like class , arrays , objects ,functions,date ,regex ,maps,set,promises, etc

//****  stack  ***** */
let myname = "vivek kumar";
console.log(myname);
let mylastname = myname;
mylastname = "yadav";
console.log(myname);
console.log(mylastname);

//this is happening becuz myname is a string(primitive data type ) , resulting in mylastname getting a copy of myname , behind the scenes we are using stack and each time we assign primitive data type we are actually storing a copy of original , changing which does not effect the original 


/********Heap******/
let userOne = {
    email : "vk092@yahoo.com",
    naam : "vivek kumar"
};

let userTwo = {
    email : "shivam083@gmail.com",
    naam : "shivam"
};
console.log(userOne);
console.log(userTwo);

userTwo = userOne;
userTwo.email= "sunny@youngBlood.com";
console.log(userTwo);
console.log(userOne);


/*******as we can see , just becuz we are changing userTwo , userOne is also getting changed , this is becuz they are non-primitive data structure and such types are saved in heaps , heaps store data , and the variables stores the refrence to this data , so userOne and usertwo both are refrencing the same memory , thus changing userTwo , automatically changes userOne ******/







