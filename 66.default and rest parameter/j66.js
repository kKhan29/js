 //default parameter
 function message(text="This is default parameter"){
    console.log(text);
 }
 message();
 message("I love js es6")


 //rest parameter
 function add(x,y,...z){
    console.log(`x=${x} , y=${y} ,z=${z}`);
 }
 add(10,20,15,11,50,40);