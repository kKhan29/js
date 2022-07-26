// for(var i=0; i<3; i++){
//     document.querySelectorAll(".myBtn")[i].addEventListener("click",function(){
//         var text=this.innerHTML;
//         myAudio(text);
//         myAnim(text)
//     });
// }

// function myAudio(text) {
//     switch (text) {
//         case "a":
//             var audio = new Audio("khoma kore daw.mp3");
//             audio.play();
//             break;

//         case "b":
//             var audio = new Audio("ma aj keno amay.mp3");
//             audio.play();
//             break;

//         case "c":
//             var audio = new Audio(
//                 "MAGIC_SYSTEM_-_Magic_In_The_Air_Feat._Chawki_[Clip_Officiel].mp3"
//             );
//             audio.play();
//             break;
//     }
// }

// function myAnim(text){
//     var selectedBtn=document.querySelector("."+text);
//     selectedBtn.classList.add("anim");

//     setTimeout(function(){
//         selectedBtn.classList.remove("anim");
//     },1000)
// }



// //-----------
// document.addEventListener("keypress",function(event){
//     var text=event.key;
//     myAudio(text);
//     myAnim(text);
// })

//------------//
// document.addEventListener("keypress",function(even){
//     var text=even.key;
//     document.querySelector("p").innerHTML="You have press "+text;
// });


//------------//
var count=0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var text=event.key;
    document.querySelector("p").innerHTML="You have press "+count;
})