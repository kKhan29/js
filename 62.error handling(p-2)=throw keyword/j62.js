document.querySelector("#checkButton").addEventListener("click",function(){
    // alert("hello");

   var num= document.querySelector("#numInputfield").value;
   
   try{
        if(num<5){
            throw "number is too low";
        }
        else if(num>10){
            throw "number is too high";
        }
        else
        console.log(num);
   }catch(err){
        console.log(err);
   }
});