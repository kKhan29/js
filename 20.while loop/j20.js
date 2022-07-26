// var i=0;
// while(i<10){
//     document.write(i+" ");
//     i++;
// }

//sum----------
// var i = 1;
// var sum=0;
// while (i<10) {
//     sum=sum+i;
//     i++;
// }
// document.write("sum= "+ sum);


//task 6-->sum of those number which are devided by 3 and 5 between 100----------

var i=1;
var sum=0;
while(i<=100){
    if(i%3==0 && i%5==0){
        sum=sum+i;
        document.write(i + " "+"<br>");    
    }
    i++;
}
document.write("sum= " + sum);
