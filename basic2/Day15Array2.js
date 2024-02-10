
// concatenating two arrays 
const hindi = [1,2,4];
const eng =['one','two'];
hindi.push(eng)
console.log(hindi);//will add the whole eng array as a element

let farsi = hindi.concat(eng)//adds the arrays(items) at end of the hindi array and stores the result in a new array
console.log(farsi);

// spreading the arrays
const allLang = [...hindi,...eng];
console.log(allLang);
// this spred operator does the same thing , it spreads the elements of the array 


// un-nesting of the arrays
let another_array = [1,2,3,[2,4,[5,6],8],4];
let another_array2 = another_array.flat(Infinity);
console.log(another_array2 );
console.log(typeof(another_array2));//object


//Array.isArray
console.log(Array.isArray("hitesh"));//false
console.log(Array.isArray([2,3]));//true

//convert into a array
console.log(Array.from("hello how are you"));

console.log(Array.from({key:"value"}));
//intresting case , when it cant convert like for an object , then it will return a empty array


// make a set of elements into a array
let num1 = 9;
let num2 = 600;
let num3 = 400;
console.log(Array.of(num1,num2,num3));
//converst them into a array


