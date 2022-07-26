//error handling--->try,catch,finally,throw
//try...catch handle run time errors(program which is)
//error object
//the finally statement--->execute code,after try and catch

// alert("hi");
// alert(x);
// alert("bye");
try{
    //test code
    alert("hi");
    alert(x);
    // alert("bye");

}catch(err){
    //handle code
    // alert("inside catch block");
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}finally{
    alert("bye");
}