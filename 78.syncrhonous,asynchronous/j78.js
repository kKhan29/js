const taskOne =()=>{
    console.log("Task1");
}
const dataLoading=()=>{
    console.log("Task2.data is loading...");
}
const taskTwo=()=>{
    setTimeout(dataLoading,1000);
}
const taskThree =()=>{
    console.log("Task3");
}
const taskFour=()=>{
    console.log("Task4");
}
const taskFive =()=>{
    console.log("Task5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();