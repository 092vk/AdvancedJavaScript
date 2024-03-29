// types of events 
// 1.mouse like --> click , dbclick , mouseover,etc
// 2.keyboard--> keydown , keyup ,keypress 
// 3.form--> submit , reset , etc
// 4.windows events --> load , etc
// 5.DOMContentLoaded --> initial HTML document has been loaded and parsed



// we can add events by many methods
// 1.directly writing event code in html -->**not scalable **

// 2.selecting the ele in js and ading event and function


document.getElementById('flr1').onclick=function(){
    alert("the flr1 was clicked ");
}
// but this offers less choice and is not the prefered choice 


// 3. using eventListners --> helps in propagation 


// 4. attachEvent()--> used in internetExplorer
// 5. jQuery - onEvent --> used in Jquery


document.getElementById('flr1').addEventListener('click',(eventObject)=>{
    alert("you have clicked on flr1");
    console.log(eventObject);
},false)
//addEventListner has a third argument of boolean type 


// eventObject has many attributes of browser(window height and width,time and date ) and environment(click position , etc ) 


// type , timeStamp , defaultPrevented(stop form or anchor tag from submiting or linking)
// target , toElement , srcElement ,currentElement
// clientX , clientY , screenX , screenY
// altKey , ctrlKey , shiftKey , enterKey , spaceKey












// event propogation(boolean parameter of addEventListner)
// 1. event bubling - false , event capturing -true



// lets say we have images inside a ul  , and we have two event listner , one on img and other on ul , now  if we click on img which is inside ul , which event will run first and how the event will propagate .


// 1.event bubbling -- > false(default value)
document.getElementsByClassName('list')[0].addEventListener('click',(eventObject)=>{
    alert("you have clicked on the list");
    console.log("you have entered the list");
    eventObject.stopPropagation();//this will stop the propagation of the event further down -- in case of true or event capturing 
})//true

document.getElementById('flr3').addEventListener('click',()=>{
    alert("you have clicked the flr3");
    console.log("flr3 was clicked");
})


// when we dont give any argument to event listner , it takes false by default parameter for event propagation --> this is called as event bubbling , first the inner event will run and then it bubble up .


// 2.event capturing
document.getElementById('flr4').addEventListener('click',(eventObject)=>{
    console.log("you have clicked on flr4");
    alert("you have clicked on flr4");
    
},true);
// for this to work both inner and outer eventListner must be true , --> in this case the outer eventListener works first and then the inner one 




// we can use ****eventObject.stopPropagation()****** to stop the propogation of the event in lower or higher tags 



document.getElementById('gogly').addEventListener('click',function(eventObject){
    console.log("clicked");
    eventObject.preventDefault();
    console.log("google didn't open as we prevented the default to happen ");
},false)
// we can use preventDefault() to stop the default from happening 





// Q. when clicked on the image , dissapear it 
// document.getElementById('flr4').addEventListener('click',function(eventObject){
//     console.log(eventObject);
//     eventObject.target.style.display="none";
//     console.log("the flr4 is hidden now");
// },false);

// eventObject.target selects the object on which you are using the eventListner
// this method of setting display == none ,is used to hide someting temporarily , and it is not recommended 


// document.querySelector('.list').addEventListener('click',function(eventObject){
//     console.log(eventObject.target);//we have added the event listner on the ul , but when we get the target we are getting the img 

//     let objRemove = eventObject.target.parentNode;
//     objRemove.remove();
//     //we have selected the parent becuz the img is in list and we want to remove the whole list ,
//     console.log("the clicked image is removed ");
// })

// another method 
/*
document.querrySelector('.list).addeventListener('click',function(eventObject){
    let removeEle = eventObject.target.parentNode;
    removeEle.parentNode.removeChild(removeEle);

    **in this one we first go to ul and then use remove child to remove li which was clicked **
}) */




// but this has problem , lets say we have links and images both in ul and we want to remove images only when clicked and keep the links as it is , but currently according to the above code, when we click on the link , it will remove the whole list

// ***-->> sol : use a conditional statement to check if the selected element is img or not if yes then remove it 

document.querySelector('.list').addEventListener('click',function(eventObject){
   let tag = eventObject.target.tagName;
   if(tag =="IMG"){
    console.log(tag);
    eventObject.target.parentNode.remove();
   }
   console.log(tag);
})


