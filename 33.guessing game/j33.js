var won=0;
var loss=0;

for(var i=0; i<5; i++){
    var In=parseInt(prompt("Enter a number 0 to 10: "));
    var guessingNumber=Math.floor(Math.random()*10)+1;
    if(In==guessingNumber){
        console.log("you have won");
        won++;
    }
    else{
    console.log("you have loss! random number was " + guessingNumber);
    loss++;
    }    
}
console.log("won "+won+" times");
console.log("loss "+loss+" times");
