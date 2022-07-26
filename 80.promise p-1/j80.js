//how to create promise-pending,resolve,reject
const promise1=new Promise((resolve,reject)=>{
    //  let completedPromise = true;
    //  if (completedPromise) {
    //      resolve("completed promise 1");
    //  } else {
    //      reject("not completed");
    //  }
    setTimeout(()=>{
        resolve("complete promise 1")
    },2000);
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("complete promise 2")
    },1000);
});

// //
// promise1
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// //
// promise2.then((res)=>{
//     console.log(res);
// })

// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(res1,res2);
// });
Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
});