//BOM
//Timing Event method
//setTimeout(),seInterval()


//setTimeout---------
// setTimeout(()=>{
//     console.log("hi");
// },3000);


// setTimeout(display,2000);
// function display(){
//     console.log("displayiong function");
// };

var btn=document.querySelector(".save-btn");
var messege = document.querySelector(".messege");

// btn.addEventListener("click",saveUser);
// function saveUser(){
//     messege.textContent="User registration successfull!";

//     setTimeout(()=>{
//         messege.textContent="";
//     },2000);
// }

btn.addEventListener("click",displayCount);
function displayCount(){
    let count=0;
    messege.textContent=count;

    setInterval(()=>{
        count++;
        messege.textContent=count;
    },1000);
}
