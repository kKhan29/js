var messege=document.querySelector("p");
var btn=document.querySelector("button");
btn.addEventListener("click",startClock);
 
function startClock(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    minutes=formatTime(minutes);
    seconds=formatTime(seconds);

    var time=hours+ ":" + minutes + ":" + seconds;
    messege.textContent = time;

    setTimeout(startClock,1000);
};

function formatTime(value){
    if(value<10){
        value = "0" + value;
    }
    return value;    
};