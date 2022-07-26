//for of
let names=["abul","babul","kabul"];
for(let name of names){
    console.log(name);
}

//for in
let student={
    ID:"B202012029",
    Name:"Khairuzzaman",
    CGPA:3.21
};
for(let x in student){
    // console.log(x);
    // console.log(student[x]);
    console.log(`${x} : ${student[x]}`);
}