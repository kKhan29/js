const taskOne=()=>{
    return new Promise((resolve,reject)=>{
        resolve('task1');
    }); 
}
const taskTwo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task2");
        },2000);
    });
}
const taskThree=()=>{
    return new Promise((resolve,reject)=>{
        reject('task3 not completed');
    })
}

taskOne()
.then((res)=>console.log(res))
.then(taskTwo)
.then((res)=>console.log(res))
.then(taskThree)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))