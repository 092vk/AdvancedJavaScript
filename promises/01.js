// promise is an object 
// promises helps us deal with async opeartions in a more organised way 


//typical promise 
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
    let error = true;
    if(!error){
        resolve ({username:"vievk",entryNo, "22bec092"});
    }
    else{
        reject('error js went wrong ');
    }
   },1000);
}) 


asybc function consume 