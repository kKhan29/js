// var names=["anis","abid","rifat","adil","nabil"];
// console.log(names);

// //shift opposite of pop---------
// names.shift();
// console.log(names);

// //unshift opposite of push--------
// names.unshift("akib");
// console.log(names);

// //adding by splice-----------
// names.splice(2,1,"safik","sakib","safin");
// console.log(names);
// //remove by splice--------
// names.splice(1,3);
// console.log(names);

// //slice----------
// var newArray=names.slice(1,4);
// console.log(newArray);
// console.log(names);


// //alphabet sort----------
// var sortedName=names.sort();
// console.log(sortedName);

// names.reverse();
// console.log(names);



//number sort----------
var number=[2,10,5,6,12,15,1];
// number.sort(function(a,b){
//     return a-b;
// });
// console.log(number);

//reverse number sorting----
number.sort(function(a,b){
    return b-a;
});
console.log(number);
