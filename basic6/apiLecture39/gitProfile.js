const body = document.querySelector('body');
const bodyStyle={
    overflow:"hidden",
    padding:"0",
    margin:"0",
    boxSizing:"border-box"
}
Object.assign(body.style,bodyStyle);


const root = document.getElementsByClassName("root")[0];
console.log(root);
const rootStyle = {
    overflow:"hidden",
    backgroundColor : "black",
    color:"white",
    width:"100vw",
    height:"100vh",
    padding:"0px",
    margin:"0px"
}
Object.assign(root.style,rootStyle);



// creating the heading 
const heading1 = document.createElement("h1");
heading1.append(document.createTextNode("GitHub Profiler"));
root.appendChild(heading1);

// styling heading 
const styleHeading ={
    fontSize:"8vh",
    display:"block",
    left:"20vw"
}
Object.assign(heading1.style,styleHeading);



// creating a box , 
const box = document.createElement("div");
root.appendChild(box);

// styling box 
const styleBox={
    height:"30vh",
    width:"20vw",
    border:"2px solid white",
    // backgroundColor:"white",
    // borderColor:"white"

}
Object.assign(box.style,styleBox);



//creating the form 
 