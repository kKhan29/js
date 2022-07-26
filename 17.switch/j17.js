// var k = prompt("Enter any number: ");

// switch(k){
//     case '0':
//         document.write("Zero");
//         break;
    
//     case '1':
//         document.write("one");
//         break;
//     case '2':
//         document.write("Two");
//         break;
    
//     case '3':
//         document.write("Three");
//         break;
//     case '4':
//         document.write("Four");
//         break;
    
//     case '5':
//         document.write("Five");
//         break;
//     case '6':
//         document.write("six");
//         break;
//     case '7':
//         document.write("Seven");
//         break;
    
//     case '8':
//         document.write("Eight");
//         break;
//     case '9':
//         document.write("Nine");
//         break;

//     default:
//         document.write("Not a digit");
//         break;

// }



//task
var letter = prompt("Enter any letter: ");
letter=letter.toLowerCase();

switch (letter) {
    case "a":      
    case "e":      
    case "i":   
    case "o":       
    case "u":
        document.write("vowel");
        break;

    default:
        document.write("consonant");
        break;
}