//--------hoisting-----------//

// x=20;
// console.log(x);
// var x; //variable declare at the last 

// y=5;
// console.log(y);
// let x; //will be reference error

// z=10;
// console.log(z);
// const z;//will be systax error

// x=10;
// if(true){
//     y=5;
//     console.log(`y = ${y}`);
//     var y;
// }
// console.log(`x = ${x}`);
// var x;


//--------------strict mode---------//
"use strict"

x=5;
console.log(x);