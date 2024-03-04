// API - Application public Interface (talking language between two sysytems)

// use json formatter sites to destructure the results which you find difficult to read 


// what is  a markup language like html , xml ? 
// --> markup language is a text-encoding sysytem (rules for layout and relationship between different parts and how they appear in digital content ) which specifies the structure and formatting of a document and defines the relationsip between different parts of the document .
// eg: html - > tags, metaData , headidng  etc --> markup language make reading and processing a document easy and programmable .


// xml - eXtensive markup language : similar to html but while html is conserned with displaying data on web , xML is more conserned with sharing of data , thats why it was used for connecting to systems , aka apis .
// AJAX --> asynchronous JavaScript and XML 





// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.




// this is one of the earliest methods to send requests to apis 

const url = 'https://api.github.com/users/092vk'; 
const xhr = new XMLHttpRequest();//it is a object and it has many methods which we will use 
xhr.open('GET',url);//sending request to url
// each method here like open , send , etc have a code which we can see by readyState
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        let obj = this.responseText;

        //here we are getting the response in form of string , if we want to get elements as we do in objects , we can convert this in JSON ,and then get watever we want 

        obj = JSON.parse(obj);
        //converted string to JSON, parse method is used for it .

        console.log(obj.followers);

    }
}

xhr.send();//sending the request
console.log(xhr.readyState);






// v8 engine(cpp based)
// -->console,dom,fetch etc are browser apis , and not part of js core 
