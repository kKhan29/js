//load,unload
//scroll
//resize
//toggle

// window.addEventListener("load",function(){
//     console.log("load");
// });
// window.addEventListener("unload",function(){
//     console.log("unload");
// });

// //--------scroll----------//
// window.addEventListener("scroll",function(){
//     console.log("scroll");
// });

// //--------resize----------//
// window.addEventListener("resize",function(){
//     // console.log("resize");
//     const width=window.outerWidth;
//     const height=window.outerHeight;
//     // console.log("width " + width, "height " + height);
//     console.log(`height: ${height}, width: ${width}`);
// });

//-------toggle----------//
const details=document.querySelector("details");
details.addEventListener("toggle",function(e){
    // console.log("toggle");
    //console.log(e.target.open);
    const check=e.target.open;
    if(check==true)
        console.log("Thanks for open");
    else
        console.log("Thanks for close");
});