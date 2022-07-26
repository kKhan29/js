// var number = Number(prompt("enter a number: "));
// // if(number>=0)
// // document.write("positive");

// // else
// // document.write("negative");

// //
// // var result= number>0 ? "positive": "negative";
// // document.write(result);
// // number > 0 ? document.write("positive") : document.write("negative");


// //
// var result= number>0 ? "positive" : number<0 ? "negative" : "zero";
// document.write(result);


//task
var n1=Number(prompt("enter first number: "));
var n2=Number(prompt("enter second number: "));
var n3=Number(prompt("enter third number: "));

var result= n1>n2&&n1>n3 ? n1 : n2>n1&&n2>n3 ? n2 : n3;
document.write(result);
