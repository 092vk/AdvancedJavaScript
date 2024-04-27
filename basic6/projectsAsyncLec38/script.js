
// setTimeout : it is used to run a specific handler function once after a certain period of time 

//setInterval : it is used to run a handler function again and again after a fixed interval of time 


const heading = document.querySelector('.heading');
const handler = function(){
    heading.innerHTML="Best Js series ";
}

setTimeout(handler,2000);


// use case lets say i am going to a website , if the user login 's inside the website in the first 10 seconds then okay otherwise i have to give it a pop up that he needs to login , now if we does login we need to ensure that there is no pop up to disturb him 


//first remove the login message initially 
const loginMsg = document.querySelector('p');
loginMsg.style.display='none';

const displayLoginMasg = function (){
    console.log("i was here ");
    loginMsg.style.display='block';
}
const displayLogin = setTimeout(displayLoginMasg,5000);

//but if clicked on clike me , we have to stop it 
const button = document.querySelector('button');
button.addEventListener('click',function(){
    console.log("now no login message will be visible");
    clearTimeout(displayLogin);
});



