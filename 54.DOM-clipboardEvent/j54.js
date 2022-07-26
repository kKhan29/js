//clipboard Event
//oncopy
//oncut
//onpaste
const input=document.querySelector("input");
const p=document.querySelector("p");

input.addEventListener("copy",function(e){
    // console.log("copied");
    // console.log(e.target.value);
    p.innerHTML="you have copied";
});

input.addEventListener("cut",function(e){
    // console.log("cut");
    // console.log(e.target.value);
    p.innerHTML = "you have cut";
});

input.addEventListener("paste",function(e){
    // console.log("paste");
    p.innerHTML = "you have paste";
})