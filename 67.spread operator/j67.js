//rest parameter==> value pack kore array te rakhe  ...last e use korte hoy

//spread parameter==> value unpack kore...jkono jaygay use kora jay

// function addNumbers(x,y,z){
//     return x+y+z;
// }
// let number=[10,20,30];
// // console.log(addNumbers(number[0],number[1],number[2]));
// console.log(addNumbers(...number)); //spread operator

// let num1 = [1, 2, 3];
// let num2 = [...num1, 4, 5, 6]; //spread operator je kono jaygay use kora jay
// console.log(num2);

// let num1=[1,2,3,4];
// let num2=[5,6,7,8,9];
// let numbers=[...num1, ...num2];
// console.log(numbers);


let p1={
    name:"Khairuzzaman",
    Age:20
};
let p2={
    Relegion:"Islam",
    Nationality:"Bangladeshi"
}
let p={...p1, ...p2};
console.log(p);
