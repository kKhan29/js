var students=[
    {
        ID:101,
        Name:"Khairuzzaman",
        Cgpa:3.21
    },
    {
        ID:102,
        Name:"Abdullah",
        Cgpa:2.52
    },
    {
        ID:103,
        Name:"Abdur Rahman",
        Cgpa:3.45
    }

]
// console.log(students);

//traditional-----------------
// function studentName(){
//     return students.filter(function(x){
//         return x.Cgpa > 3
//     }).map(function(y){
//         return y.Name;
//     });
// };
// console.log(studentName());

//arrow -------------
const studentName = () => students.filter((x) => x.Cgpa>3).map((y)=> y.Name);
console.log(studentName());