// // import {message,setTxt} from './test.js';
// import {text as message,setTxt} from './test.js';
// console.log(message);

// setTxt("Module has been changed");
// console.log(message);




//-----------class----------//  
class Student{

    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    set studentName(name){
        this.name=name;
    }

    get studentInfo(){
        return this.id+" "+this.name;
    }
}
let s1=new Student(101,"khan");
// console.log(s1.id);
// console.log(s1);

// s1.studentName="lalala";
// console.log(s1);

console.log(s1.studentInfo);