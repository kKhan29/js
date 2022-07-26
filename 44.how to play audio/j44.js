for(var i=0; i<3; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener("click",function(){
        var text=this.innerHTML;

        audioPlay(text);
    });

}

function audioPlay(text){
    switch (text) {
        case "a":
            var audio = new Audio("khoma kore daw.mp3");
            audio.play();
            break;
            
        case "b":
            var audio = new Audio("ma aj keno amay.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio(
                "MAGIC_SYSTEM_-_Magic_In_The_Air_Feat._Chawki_[Clip_Officiel].mp3");
            audio.play();
            break;
    }
}