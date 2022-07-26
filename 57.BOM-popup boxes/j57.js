//BOM = browser object model
//popup boxes => alert,confirm,prompt

// alert("error here");


// //confirm
// // confirm("Are you sure?");
// function deleteSomething(){
//     var value=confirm("do you want to delete?");
//     if(value)
//     console.log("deleted");
//     else
//     console.log("not deleted");
// }
// deleteSomething();


//prompt
function welcomeMessege(){
    var h1 = document.createElement("h1");
    var text;

    var name = prompt("Enter your name: ");
    if(name == null || name==""){
        text = "no name found";
    }   
    else
        text = name;

    var textNode=document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
welcomeMessege();