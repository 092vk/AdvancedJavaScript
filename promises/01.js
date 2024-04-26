// promise is an object 
// promises helps us deal with async opeartions in a more organised way 


//typical promise 

// making a promise 

// the parameters inside promise resolve and reject are functions whihc are called when the promise is resolved and rejected , you have to call it while making the promise , they will be called inside .then and .catch 

const promiseOne = new Promise((resolve,reject)=>{
    //do any async task
    //db , cryptography , network requests etc 

    setTimeout(()=>{
        console.log("async task is complete ");
        resolve();
    },1000)
})


promiseOne.then(()=>{
    console.log("promise consumed");
})


// --> resolve and reject are conneted to then , catch 



// promise directly 
new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("async task 2");
        res();
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
})



// promise with parameters to resolve 
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 3 complete");
        resolve({data:"i can send any data here not just object"});
    },1000)
})

promiseThree.then((obj)=>{
    console.log(obj);
})



// promise  with both resolve and reject
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            //no error the async ops was successful 
            resolve({msg:'this is the data being sent after completing or on getting from the async ops',str:'this is a string'});
        }
        else{
            reject('this is the error message');
        }
    },1000)
})

promiseFour.then((fromAsync)=>{
    console.log(fromAsync);
    return fromAsync.str;
})
.then((str)=>{
    console.log("so from first then we are taking a value and then sending it to the next then ",str);
})
.catch((error)=>{
    console.log(error);
})




//promise resolve (runs on resolving), reject(runs when rejected and got error) , finally(runs no matter what happens )
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async op 5 complete");
        let error = false;
        if(!error){
            resolve({name:"vievck",code:"092"});
        }
        else{
            reject("errror found");
        }
    },1000)
})

promiseFive.then((resolveObj)=>{
    console.log("the got this from resoleve ",resolveObj);
    return resolveObj.code;
})
.then((nextThen)=>{
    console.log("we got this from above then ",nextThen);
})
.catch((error)=>{
    console.log("if you are seeing this means we have got error in our async op",error);
})
.finally(()=>{
    console.log("this block will run everytime no matter it is resolved or rejected , like closing the file");
})






// promise 6
const promiseSix = new Promise((resolve,reject)=>{
   setTimeout(function(){
    let error = false;
    if(!error){
        resolve ({username:"vievk",entryNo: "22bec092"});
    }
    else{
        reject('error js went wrong ');
    }
   },1000);
}) 


// async function consumePromise5(){
//     const response = await promiseSix
//     console.log(response);
// } 

// consumePromise5();

//as we can see the above code only runs successfully when we get our request resolved , and we get error when we get rejected from our promise ,so we will use try - catch and finally here also

const asyncFunc = async ()=>{
    try {
        const response = await promiseSix;
        console.log(response);
    } catch (error) {
        console.log(error);
    }finally{
        console.log("finnaly is also used here ");
    }
}
asyncFunc();

// it is necessary to have await in async function , async function is generally used to consume promise in a synchronous style 

// this code will handle errors gracefully while at the same time handling promise in a synchronous style 




// the choice between using then-catch or try-then rest on ease which you feel 




// demonstrating use of async functions while using fetch()
const fetchUser = async()=>{
    try{
        const responsi = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(responsi);
        const dataJ = await responsi.json();
        // the above line gives us the json body data from the fetch api response , it is not converting anything , and it is different from JSON.parse()
        console.log(dataJ);
        console.log("received data ");

    }catch(error){
        console.log(`E: ${error}`);
    }
}
fetchUser();
//dont know why fetch is not working , but the syntax is correct 




// using fetch by then and catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((resolve)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);//resolving above sent data
})
.catch((error)=>{
    console.log("error");
})
// again failed but syntax is correct 





// as we can see the the first output which we are getting is of the fetch , despite fetch being a async request ,  