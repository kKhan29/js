var text= "Bangladesh";
var text2= " is a beautiful country"
// var text= prompt("Enter your name: ");

var len= text.length;
document.write("number of char "+ len +"<br/>");

var index = text.charAt(2);
document.write(index + "<br/>");

//uppercase and lowercase
document.write(text.toUpperCase() + "<br/>");
document.write(text.toLowerCase() + "<br/>");

//concate
document.write(text.concat(text2) +"<br/>");

//slice
document.write(text.slice(0,3) +"<br/>")



//task
var fName= prompt("Enter first name here: ");
var lName= prompt("Enter last name here: ");
var fName= fName + lName;

document.write(fName);
document.write(fName.length);
document.write(fName.toUpperCase());
document.write(fName.charAt(1))