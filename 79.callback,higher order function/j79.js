// const taskOne = () => {
//     console.log("Task1");
// };
// const taskTwo = () => {
//     setTimeout(()=>{
//         console.log("Task2.data is loading...");
//     }, 1000);
// };
// const taskThree = () => {
//     console.log("Task3");
// };
// const taskFour = () => {
//     console.log("Task4");
// };
// const taskFive = () => {
//     console.log("Task5");
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();



//====callback ,higher order function====//
// const square =(x)=>{
//     console.log(`square of ${x}:${x*x}`);
// }
// // // square(5);
// // let y=square;
// // y(5);

// function higherOrderFunction(num,callback){
//     callback(num);
// }
// higherOrderFunction(6,square);



const taskOne=(callback)=>{
    console.log("task1");
    callback();
}
const taskTwo=(callback)=>{
    setTimeout(()=>{
        console.log("task2.loading");
        callback();
    },2000)
}
const taskThree=(callback)=>{
    console.log("task3");
    callback();
}
const taskFour = (callback) => {
    console.log("task4");
    callback();
};
const taskFive = () => {
    console.log("task5");
};
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
});