
// **** from parent to child  *****

const parentTag = document.querySelector(".parent");
console.log(parentTag);

const listChild = parentTag.children;
console.log(listChild);//return html collections 

// loop over every child of parent and make thier background yello,color blue and give them some padding 

for(let i=0;i<listChild.length;i++){
    listChild[i].style.backgroundColor="yellow";
    listChild[i].style.color="blue";
    listChild[i].style.padding="15px";
}


// firstElementChild and lastElementChild

const firstChild = parentTag.firstElementChild;
const lastChild = parentTag.lastElementChild;

console.log(`first child is : ${firstChild.innerText}`);
console.log(`last child is : ${lastChild.innerText}`);



// from child to parent 
console.log(firstChild.parentElement);
console.log(lastChild.parentElement);



// when we run some selector , it searches for that element in whole DOM tree , to avoid this we use values like parentElement, firstElementChild , lastElementChild , nextElementSibling 
const sibling1 = firstChild.nextElementSibling;
console.log(sibling1.textContent);
//gives the next sibling 




// childNodes 
console.log(`NODES : ${parentTag.childNodes}`);
console.log(parentTag.childNodes);//child nodes are extensively used in react

// childNodes are types of nodeList , and nodeList contains everything from comments, lineBreaks to html tags unlike htmlCollectios 


// .children returns a htmlCollections of all the child tags 
//while .childNodes returns nodeList of all the elemenst inside that tag , this counts all the elements like comments , lineBreak etc , remember html counts only one linebreak






// 