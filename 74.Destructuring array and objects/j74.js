// //array destructure---------
// let numbers = [20,30,40,50];
// let[num1,num2,num3,num4] = numbers;
// console.log(num1);

// //swapping------------
// let a=10, b=5;
// [a,b]=[b,a];
// console.log(`a: ${a}`);



// //object destructure-----------
// //nested object destructure-----------
// let studentInfo={
//     id:101,
//     name:"khan",
//     cgpa:3.65,
//     language:{
//         native:"Bangla",
//         beginner:"English"
//     }
// }
// const {id,name,cpga,language}=studentInfo;
// console.log(id);
// console.log(language.native);


//destructuring function parameters------------
const studentInfo = ({id,name,cgpa}) => {
    console.log(`ID:${id},Name:${name},Cgpa:${cgpa}`);
};

let student = {
    id: 101,
    name: "khan",
    cgpa: 3.65,
};
studentInfo(student);
