
const form = document.querySelector('form');
console.log(form);


// const height = parseInt(document.querySelector('.height').value);
// we can't use this as initially the form is empty and we dont want empty value , we want value only when the form is submitted  


//we will select the form and on submit we will prevent the deafult nature of form to submit and then get the elements 

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //generally we also check if we are getting valid info, also here parseInt is not necessary as we are explicitly getting number

    const height = parseInt(document.querySelector('.height').value);
    const weight = parseInt(document.querySelector('.weight').value);

    const result = document.querySelector('#result');
    
    // we are using nested if-else , as we dont want to move forward if any condition is not true 

    if(height === '' || height<0 || isNaN(height)){
        alert("enter valid height")
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        alert("enter valid weight")
    }
    else{
        const bmi = (weight/((height*height)/10000).toFixed(2));
        if(bmi < 18.6){
            result.innerHTML = `<span>Your BMI is ${bmi} <br> Your are Currently UnderWeight</span>`
        }
        else if(bmi <= 24.9 && bmi >= 18.6){
            result.innerHTML = `<span>Your BMI is ${bmi} <br> Your BMI is Correct Keep being Healthy</span>`
        }
        else{
            result.innerHTML = `<span>Your BMI is ${bmi} <br> You are currently Overweight</span>`
        }
    }
})


