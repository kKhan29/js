var photos=["book1.jpg","book2.jpg","book3.jpg","book4.jpg"];
var img=document.querySelector("img");

var count=0;
function next(){
    count++;
    if(count>=photos.length){
        count=0;
        img.src=photos[count];
    }
    else
    img.src=photos[count];
}

function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        img.src=photos[count];
    }
    else
    img.src=photos[count];
}
