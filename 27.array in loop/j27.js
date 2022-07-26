// var num=[10,20,30,40,50];
var num = new Array();
for(var i=0; i<5; i++){
    num[i]=parseInt(prompt("Enter your numbers: "));
}

var sum=0;
for(var i=0; i<5; i++){
    document.write(num[i]+" ");
    sum=sum+num[i];
}
document.write("<br>" +sum);