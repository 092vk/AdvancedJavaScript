// functions in js 

function add(a,b){//a,b are called parameters
    return a+b;
}

console.log(add(2,3));
console.log(add("2",3));
console.log(add(2,"3"));//here 2,3 are called arguments


const loggedIn =(username)=>{
    if(username===undefined){
        return `Error: correct argument was not given `;
    }
    return `${username} just logged in`;
};

const login = loggedIn("vivek");
console.log(login);

const login2 = loggedIn();
console.log(login2);//when no argument is given it take it as undefined 
//remember to check the passed arguments , whether they are valid or not 



// another way to avoid the above mistake is to make named parameters
function sayhello(name = "user"){
    
    console.log(`hello ${name} , goodmorning`);
}
sayhello();
