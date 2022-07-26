// function heighestScore(scores){
//     let max=scores[0];
//     for(var i=1; i<scores.length; i++){
//         if(max<scores[i]){
//             max=scores[i];
//         }
//     }
//     return max;
// }
// var score = [5,22,21,6,41,1,4];
// var maxScore=heighestScore(score);
// console.log(maxScore);


//---------------
function heighestScore(scores){
    let max=scores[0];
    for(var i=1; i<scores.length; i++){
        if(max<scores[i]){
            max=scores[i];
        }
    }
    return max;
}
let score=[2,5,4,6,8,11,44,12,15];
var maxScore=heighestScore(score);
console.log(maxScore);
