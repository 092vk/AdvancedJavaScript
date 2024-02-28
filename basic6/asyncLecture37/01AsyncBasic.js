// javaScript is -->
// 1.synchronous
// 2.single Threaded




// Blocking v/s Non blocking code
// Blocking code--> blocks the flow of program till the work is not done , eg--> lets say we are reading a file synchrously , this means that we can't move to next code untill we have completely read the file 

// Non-Blocking Code --> the interpreter does not stop executing code if a code is running like reading a file asyncronously , But how , becuz js is single threaded ???? 


// which is better Blocking V/S Non Blocking -->
// it depends upon the use case for example , lets say we are doing authentication , in this code we will use blocking code , becuz success message needs to be given only when the user data matches with the data in the DB , while in other cases like file reading , we will be using non-blocking code 




// js is single threaded , and is synchronous in nature but is able to do asynchronous tasks also ??
// --> this is done through things like web api , high priority queue , and other supportive things along with js engine that powers js environment
// --> using them js is able to achieve promises , callbacks ,async/await 


// ***explain the whole async nature of js ??******
// **1. It is achieved through an event driven ,non-blocking model . all the async functions in js happens with event loop , lets consider call backs , when functions are passed as arguments , these functions can be run only when that function which usually calls callback func on completing some event , thus achieving async nature ***


// so js has web api and browser they are the guys which do the backWork for the js when js wants to do async work  , which consisits of event loop , which consists of task priority queue , whenever the task is completed the web api sends the task to task priority queue , which inserts it into the call stack ,.



// this is also a brother of callback or task queue , called mirotask queue which has higher priority then task or callback queue , it consiists of web apis like fetch , promises , mutationObserver etc .  

//  **not sure about this **//only when the call stack is empty (remembe new call stack is created for each new function) the event loop , microtask will come in picture , once the microTask queue is empty , task queue is executed .

// starvation of callBacks --> when we get stuck in microtask queue due to nesting of microtask . 

