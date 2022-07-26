//DOM events
//1.Event object
    //--> event type:change,submit,load,   unload,open,play canplay,pause,playing,progress,ended,resize,scroll,toggle etc

    //-->properties:type,target,preventDefault()

//2. MouseEvent object
//3. KeyboardEvent obeject
//4. ClicpBoardEvent obeject
//5. FocusEvent obeject
//6. DragEvent obeject



//onChange
//<input/> ===>text,number,password,email,radio,checkbox,search,time,date,datetime,week,month,url,tel,file
//<select>
//<textarea>

// //-----------input-----//
// console.clear();
// var input=document.querySelector("input[name=name]");
// input.addEventListener("change",changeHandler);

// function changeHandler(event){
//     // console.log(event);
//     // console.log(event.type);
//     // console.log(event.target);
//     // console.log(event.target.className);
//     // console.log(event.target.id);
//     console.log(event.target.value);
// }


// //---------checkbox--------//
// const programs=document.querySelectorAll("input[name=program]");

// Array.from(programs).map((program)=> {
//     program.addEventListener("change",programHandler);
// });
// function programHandler(e){
//     if(e.target.checked){
//         console.log("checked");
//         console.log(e.target.value);
//     }
// };

////ex--------------
// const programs=document.querySelectorAll("input[name=program]");

// Array.from(programs).map((program)=>{
//     program.addEventListener("change",programHandler);
// });

// function programHandler(e){
//     if(e.target.checked){
//         // console.log("checked")
//         console.log(e.target.value);
//     }
// };

//----------select-----------//
const department=document.querySelector("#department");
// console.log(department);
department.addEventListener("change",departmentHandler);

function departmentHandler(e){
    // console.log("selected");
    console.log(e.target.value);
}