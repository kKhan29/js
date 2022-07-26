// var numbers=[10,20,30,40];
// for(let x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }


//forEach
// var numbers = [10, 20, 30, 40];
// numbers.forEach(myFunction);

// function myFunction(x){
//     console.log(x);
// }

// //or------------
// var numbers = [10, 20, 30, 40];
// numbers.forEach(function(x){
//     console.log(x);
// });

//squre------------------
// var numbers = [10, 20, 30, 40];
// var sqrNumbers=[];
// numbers.forEach(function(x){
//     sqrNumbers.push(x*x);
// });
// console.log(sqrNumbers);

//x+5-------------
var numbers = [10, 20, 30, 40];
numbers.forEach(function(x,index,arr){
    arr[index]=x+5;
});
console.log(numbers);
