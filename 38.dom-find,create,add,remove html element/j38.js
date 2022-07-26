// var link=document.getElementsByTagName("a")[0];
// link.innerHTML="link is changed";
// link.style.textDecoration="none";
// link.style.color="red";
// link.style.fontSize="2rem";
// link.href="https://www.facebook.com";



//adding elemennt
var myDiv=document.querySelector(".my-div");
myDiv.style.background="red";

var heading3=document.createElement("h1");
var text=document.createTextNode("This is new heading");

myDiv.appendChild(heading3);
heading3.appendChild(text);

//adding by position
var heading0=document.createElement("h1");
var text0=document.createTextNode("This is heading0");

heading0.appendChild(text0);
var heading1=document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading1);




//removing element
var heading2=document.getElementsByTagName("h1")[1];

myDiv.removeChild(heading2);


//class add and remove
document.querySelector(".my-div").classList;
document.querySelector(".my-div").classList.add("myClass");
document.querySelector(".my-div").classList.remove("myclass");