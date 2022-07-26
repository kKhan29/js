//startSwitch (searchString,position) --> check a string starts with another string
//endsWith(searchString, length) --> check a string end with another string
//includes(searchString, position) --> check if a string contains another string 
//all these methods are case sensitive

const message="Today is wednesday";
//startsWith
// console.log(message.startsWith('Today'));
// console.log(message.startsWith("today"));//case sensitive

//endsWith
console.log(message.endsWith('wednesday'));

//includes
console.log(message.includes("is"));