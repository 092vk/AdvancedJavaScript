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


// 3. using eventListners


// 4. attachEvent()--> used in internetExplorer
// 5. jQuery - onEvent --> used in Jquery


document.getElementById('flr1').addEventListener('click',(eventObject)=>{
    alert("you have clicked on flr1");
    console.log(eventObject);
     aur chai
})


