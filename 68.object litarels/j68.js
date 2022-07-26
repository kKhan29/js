// function studentInfo(name,age){
//     return{
//         // name:name,
//         // age:age
//         name,
//         age
//     }
// }
// console.log(studentInfo("khairuzzaman",20));



let message={
    // body:function(){
    //     return "hi i am object function";
    // }
    // body(){
    //     return "hi, i am object function";
    // }

    //consize method------
    'body name'(){
        return "hi, i am object function";
    }
}
// console.log(message.body());
console.log(message['body name']());