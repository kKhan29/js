//BOM(browser object model)
//window object
//location object
console.clear();

// //href
// console.log(location.href);

// //protocol
// console.log(location.protocol);

// //host name
// console.log(location.hostname);

// //port
// console.log(location.port);

// //pathName
// console.log(location.pathname);


//-------------------//
const locationDiv=document.querySelector(".location-div");
// console.log(locationDiv);
var p1 = locationDiv.children[0];
p1.textContent=location.href;

var p2 = locationDiv.children[1];
p2.textContent=location.protocol;

var p3 = locationDiv.children[2];
p3.textContent=location.hostname;

var p4 = locationDiv.children[3];
p4.textContent=location.port;

var p5 = locationDiv.children[4];
p5.textContent=location.pathname;


var button=document.getElementById("btn");
    button.addEventListener("click",function(){
        location.assign("https://www.youtube.com");
    });