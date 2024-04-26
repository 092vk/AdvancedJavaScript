const button = document.querySelectorAll(".button");

const bodyElement = document.querySelector("body");
const element = document.querySelector('h2');

button.forEach(function(button){
    button.addEventListener("click",function(event){
        console.log("button was clicked ");
        bodyElement.style.backgroundColor=event.target.id;
        if(event.target.id == 'black'){
            element.style.color='white';
        }
        else{
            element.style.color='black';
        }
        console.log(event.target.id);
    })
});

