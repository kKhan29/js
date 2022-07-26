const taskOne=()=>{
    return new Promise((resolve,reject)=>{
        resolve('task 1 is complete');
    })
}
const taskTwo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('task2 is complete');
        },2000);
    })
}
const taskThree=()=>{
    return new Promise((resolve,reject)=>{
        reject('task3 is not complete');
    })
} 

// const taskAll= async()=>{
// }
async function taskAll(){
    try{
        const t1=await taskOne();
    console.log(t1);

    const t2=await taskTwo();
    console.log(t2);

    const t3=await taskThree();
    console.log(t3);
    }catch(e){
        console.log(e);
    }
}
taskAll();