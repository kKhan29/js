// function heighestRunScorer(pInfo){
//     let maxscorer=pInfo[0][0];
//     let maxscore=pInfo[0][1];
//     for(let i=1; i<playersInfo.length; i++){
//         if(maxscore < playersInfo[i][1]){
//             maxscore=playersInfo[i][1];
//             maxscorer=playersInfo[i][0];
//         }
//     }
//     return maxscorer;
// }
// let playersInfo=[["sakib",25],["Rakib",55],["mashrafee",44],["rubel",22]];

// let maxRuner=heighestRunScorer(playersInfo);
// console.log(maxRuner);



// //----------------
// function heighestScorer(playersInfo){
//     let maxScorer=playersInfo[0][0];
//     let maxScore=playersInfo[0][1];
//     for(var i=1; i<playersInfo.length; i++){
//         if(maxScore<playersInfo[i][1]){
//             maxScore=playersInfo[i][1];
//             maxScorer=playersInfo[i][0];
//         }
//     }
//     return maxScorer;
// }

// let playersInfo=[["Rubel",13],["Musfiq",45],["Masrafee",55],["Tamim",12],["Sakib",10]];

// let max=heighestScorer(playersInfo);
// console.log(max);



//
function heighestScorer(playersInfo){
    let maxScorer=playersInfo[0][0];
    let maxScore=playersInfo[0][1];
    for(let i=1; i<playersInfo.length; i++){
        if(maxScore<playersInfo[i][1]){
            maxScore=playersInfo[i][1];
            maxScorer=playersInfo[i][0];
        }
    }
    return maxScorer;
}

let playersInfo=[["Masrafee",56],["Rubel",9],["Sakib",18],["Musfiq",65]];
let max=heighestScorer(playersInfo);
console.log(max);

