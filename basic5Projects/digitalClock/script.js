const time = document.querySelector('.time');

function render(){
    const sTime = new Date();
    // console.log(sTime.toLocaleTimeString());
    time.innerHTML="<span>"+sTime.toLocaleTimeString()+"</span>";
}

setInterval(render,1000);
