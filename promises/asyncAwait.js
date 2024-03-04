// async and await


// async function allows you to write promise-based code as if it was synchronous and it checks that we are not breaking the execution thread 


// async --> async keyword transforms a regular javaScript function into an asynchronous function , causing it to return a Promise ***they always return a value****


//await --> await keyword is used only inside a async function to pause its execution and wait for a Promise to resolve before continuing 



// simple async function and it execution 
console.log("1");
const getData = async ()=>{
    let data = "hello world ";
    return data;
}//returns a promise 
getData().then((data)=>{
    console.log(data);
});
console.log("2");


// await inside the async 
const getData2 = async()=>{
    const data2 = await "hello world";
    console.log(data2);
}

console.log(1);
getData2();
console.log(2);



