//mouseEvent-- <html>,<head>,<meta>,<title>,<br>,<style>,<script>,<iframe>,<param>,<base>,<bdo>
//onclick
//ondblclick
//onmousedown
//onmouseup
//onmouseenter
//onmouseleave
//onmousemove
//onmouseover

console.clear();
// const div=document.querySelector("div");

// div.addEventListener("click",function(e){
//     // console.log("clicked");
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className)
//     // console.log(e.target.innerHTML);
//     // console.log(e.target.textContent);
//     // console.log(e.target.innerText);
// });

// div.addEventListener("dblclick",function(){
//     console.log("doubleclicked");
// });

// div.addEventListener("mousedown",function(){
//     console.log("mousedown");
// });
// div.addEventListener("mouseup",function(){
//     console.log("mouseup");
// });

// div.addEventListener("mouseenter",function(){
//     console.log("mouseEnter");
// })

// div.addEventListener("mouseleave",function(){
//     console.log("mouseLeave");
// })

// div.addEventListener("mousemove",function(e){
//     // console.log("mouseMove");
//     // console.log("clientX= "+e.clientX +","+"clientY= " +e.clientY);
//     console.log("offsetX= "+e.offsetX +","+"offsetY= " +e.offsetY);
    
// })

// div.addEventListener("mouseover",function(){
//     console.log("mouseOver");
// })




const buttons=document.querySelectorAll(".btn");
// console.log(buttons);

Array.from(buttons).map((button)=>{
    button.addEventListener("click",function(e){
        // console.log("clicked");
        console.log(e.target.innerText);
    });
});

