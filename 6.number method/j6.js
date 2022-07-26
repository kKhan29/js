// var num= 20;
// num = toString(num);
// // num= parseint(toString(num));

// document.write(typeof(num));


//
var number= 20.36598;
number = parseFloat(number);
document.write(number.toFixed(3) + "<br/>");

document.write(number.toPrecision(3) +"</br>");

document.write(typeof(Number("20")) + " <br/>"); //N must capital

document.write(Number("20.3654") + "<br/>");

document.write(Number(true) + "<br/>");
document.write(Number(false));