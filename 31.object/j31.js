// //how to creat an object-----------
// //how to print the value of the object
// var student1 = {
//     name:"muhammad",
//     age:20,
//     id:202012029,
//     language:["english","bengali","Arabic"]
// }
// var student2 = {
//     name:"khairuzzaman",
//     age:21,
//     id:202012030,
//     language:["urdu","bengali","Arabic"]
// }
// var student3 = {
//     name:"Khan",
//     age:22,
//     id:202012031,
//     language:["english","bengali","hindi"]
// }

// console.log(student1.name);


// constructor-----------------------------
// adding a constructor
//adding function inside a constructor

function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}
var student1 = new Student("khairuzzaman", 20, 3.25, ["bengali", "arabic"]);
var student2 = new Student("khan", 21, 3.65, ["bengali", "english"]);
var student3 = new Student("abdullah", 22, 3.85, ["arabic", "english"]);

// console.log(student1);
// console.log(student2);
student1.display();
student2.display();
student3.display();



