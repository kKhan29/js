//find(callback,value) return the value of the first element that pass certain condition
//findIndex(callback,value) return the index of the first element that pass certain condition

// let numbers=[11,13,15,16,10,2,4,25];
// let firstEventNumber=numbers.find((x)=>x%2===0);
// console.log(firstEventNumber);

// let numbers = [11, 13, 15, 16, 10, 2, 4, 25];
// const evenNumber=(value,index,array)=>{
//     if(value%2===0)
//     return value;
// }
// let firstEventNumber=numbers.find(evenNumber);
// let firstEventNumberIndex=numbers.findIndex(evenNumber);
// console.log(firstEventNumber);
// console.log(firstEventNumberIndex);




//in object-----------
let students=[
    {
        id:101,
        gpa:3.56
    },
    {
        id:101,
        gpa:3.66
    },
    {
        id:101,
        gpa:5.00
    },
    {
        id:101,
        gpa:4.56
    }
];
const firstStudent = () => students.find((x)=> x.gpa>4);
console.log(firstStudent());