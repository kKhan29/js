//forEach------------
// let numbers=[2,5,4,6,7];
// let sqrNumbers=[];

// numbers.forEach(function(x){
//     sqrNumbers.push(x*x);
// });
// console.log(sqrNumbers);


// //map---------------
// let numbers=[2,3,4,5,6];
// let sqrNumbers = numbers.map(function(x){
//     return x*x;
// });
// console.log(sqrNumbers);


//filter------------
let numbers = [22,1,2,3,55,44,88,5,9];
let newNumbers = numbers.filter(function(x){
    return x>10;
});
console.log(newNumbers);