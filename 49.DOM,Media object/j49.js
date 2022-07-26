//audio/video
//canplay,play,playing,pause,progress,ended,volumechange,waiting

const video=document.querySelector("video");
video.addEventListener("canplay",function(){
    console.log("canplay");
});

video.addEventListener("play",function(){
    console.log("Play");
});
video.addEventListener("pause",function(){
    console.log("pause");
});
video.addEventListener("playing",function(){
    console.log("Playing");
});
video.addEventListener("ended",function(){
    console.log("thanks for watching");
});
video.addEventListener("volumechange",function(){
    console.log("volume change");
});