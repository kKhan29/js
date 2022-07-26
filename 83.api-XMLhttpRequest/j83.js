console.clear();

//event-onload(),onerror()
//property-response,responseText,responseURL,status,statusText
//function-open(),send(),setRequestHeader()

const setRequest=(method,url,data)=>{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data));
        };
        xhr.onerror = () => {
            console.log("error is here");
        };

        xhr.send(JSON.stringify(data));
    })
}
const getData=()=>{
    setRequest("GET", "https://jsonplaceholder.typicode.com/todos")
    .then((res)=>console.log(res));
}
// const sendData=()=>{
//     setRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }
// const updateData=()=>{
//     setRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//         id: 1,
//         title: "fooMa",
//         body: "barMa",
//         userId: 1,
//     });
// }
// const updateSingleData=()=>{
//     setRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//         title: "this is changed",
        
//     });
// }
// const deleteData=()=>{
//     setRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// }


getData();
// sendData();
// updateData();
// updateSingleData();
// deleteData();