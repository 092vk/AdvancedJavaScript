// for loop
for(let i=0;i<=10;i++){
    console.log(i);
}



// nested loops 
for (let i = 0; i <6; i++) {
    console.log(`outer value : ${i}`);
    for(let j=0;j<3;j++){
        console.log(`inner value ${j} and inner :${i}`);
    }
    
}

console.log("i am fine ");



// itterating arrays with for loop 
let array =["vievk","shivam","shubham","ritu","sunny"];
for(let index =0;index<array.length;index++){
    console.log(array[index]);
}


// in arrays seg faults or out of bounds does not occur instead we get undefined values .** but it must be avoided at all coast 





// break and continue 
for(let i=0 ;i<6;i++){
    if(i==1)continue;//1 will not print
    if(i==4)break;//only till 3 will print
    console.log(i);
}


