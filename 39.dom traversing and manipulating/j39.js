//downward
var studentList=document.querySelector(".student-list");
var studentA=document.querySelector(".student-a");
// //or
// var studentB=studentList.querySelector(".student-b");
// //or
// var studentC=studentList.children[2];



//upWard(find parent element)
var studentA=document.querySelector("li");
var studentList=studentA.parentElement;


//sideways
var studentA=document.querySelector("li");
var studentB=studentA.nextElementSibling;
var studentC=studentB.nextElementSibling;
//upward
var studentA=studentB.previousElementSibling;