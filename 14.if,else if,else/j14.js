// var num= prompt("enter a number: ");
// if(num%2==0)
// document.write("even");
// else
// document.write("odd");



//task
var mark=prompt("enter your mark: ");

if(mark>100 || mark<0)
document.write("invalid mark");
else if (mark <= 100 && mark >= 80)
 document.write("You have got A+");

else if (mark <= 79 && mark >= 70)
 document.write("You have got A");

else if (mark <= 69 && mark >= 60)
 document.write("You have got A-");

else if (mark <= 59 && mark >= 50) 
 document.write("You have got B");

else if (mark <= 49 && mark >= 40)
 document.write("You have got C");

else if (mark <= 39 && mark >= 33)
 document.write("You have got D");

else if (mark <= 79 && mark >= 70)
 document.write("You have got A");

else
document.write("You have failed");