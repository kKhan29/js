document.querySelector("button").addEventListener("click",function(){
    alert("Hello");
});

// function msg(){
//     alert("hello");
// }

var heading=document.querySelector("#heading1");

heading.addEventListener("mouseover",function(){
    heading.classList.add("heading1");
});

heading.addEventListener("mouseout",function(){
    heading.classList.remove("heading1");
});

