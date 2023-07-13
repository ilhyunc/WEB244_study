// var label = "senecacollege";
// var tId = "ca";
// var domainName = label + "." + tId;
// console.log(domainName);

// var isSeneca = (domainName === "senecacollege.ca");
// console.log(isSeneca);

// var isNotSeneca = (domainName !== "senecacollege.ca")
// console.log(isNotSeneca);


var byte1 = Math.floor(Math.random() * 256);// floor는 내림.
var byte2 = Math.floor(Math.random() * 256);
var byte3 = Math.floor(Math.random() * 256);
var byte4 = Math.floor(Math.random() * 256);

var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;

console.log(ipAddress);

var ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;

console.log(ipInt);

//console.log(byte1, byte2, byte3, byte4);

// var byte1 = Math.floor(Math.random() * 256);

// var byte1AsString = byte1.toString();
// var byte1AsBinaryString = byte1.toString(2);
// var byte1AsHexString = byte1.toString(16);

// console.log("byte1 as string: " + byte1AsString);
// console.log("byte1 as binary string: " + byte1AsBinaryString);
// console.log("byte1 as hexadecimal string: " + byte1AsHexString);


// var days = "The days in september: \n"; 

// for (var ident = 1 ; ident <= 30 ; ident++) {
// 	days += ident + "\n";
// }
// console.log(days);


// var student = {name:"John", program:"CPD", semester:2};
// var str = "Student info:\n\n";

// for (var x in student) { // x is the current property ('key') – ie: name, program, or semester
//     str += x + ": " + student[x] + "\n"; 
// }
// console.log(str);

// var text = "";
// var i = 0;
// while (i < 10) {
//     text += "\nThe number is " + i++;
// }
// console.log(text);


var i=10;
do {
    console.log("week " + i++);
} while (i<15)

let y = '5';
undefined
console.log(typeof(y));

