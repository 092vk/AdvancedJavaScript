const button = document.querySelectorAll(".button");

const bodyElement = document.querySelector("body");


button.forEach(function(button){
    button.addEventListener("click",function(event){
        console.log("button was clicked ");
        bodyElement.style.backgroundColor=event.target.id;
        console.log(event.target.id);
    })
});

