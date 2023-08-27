// function findMatches(value, ...arg) {
//     if(arg.length < 2){
//         return "Number of arguments must be greater than or equal to 2";
//     }

//     let count = 0;
//     for(let i=0; i< arg.length; i++){
//         if(value = arg[i]) count++;
//     }
//     return count;
// }

// console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));

// function add(num1, num2){
//     return parseInt(num1)+parseFloat(num2);
// }
// console.log("2"*add("2.5", "10,75"));


// function checkPassword(password){
//     if(password.length < 8 || password.length > 32) {
//         return false;
//     }
//     // Check capital
//     if (!/[A-Z]/.test(password)) {
//         return false;    
//     }
//     // Check number    
//     if (!/\d/.test(password)) {
//         return false;
//     }
       
//      // Check symbol
//     if (!/[!@#$%^&*+\-{}]/.test(password)) {
//         return false;
//     }

//     // Valid password
//     return true;
// }

// console.log(checkPassword("Abcdef123!123456789012345678901"));

// var num = 95;

// if(num >=80){
//     console.log("A");
// }
// else if(num < 80 && num >=50){
//     console.log("B")
// }
// else{
//     console.log("F")
// }

// var varC = 5; 
// function showVars(varA) { 
// varC += varA; 
// return function (varB) { 
// varA++; 
// return "varA: " + varA + "\nvarB: " + varB + "\nvarC: " + varC; 
// }; 
// }
// myVars = showVars(5); 
// console.log(myVars(8));



// var x = "12.78";
// var y = 10;
// var z = Number(x) + y;
// console.log(z);
// console.log("sss = " + String(y));

// var str1 = "1234";
// var num1 = str1 * 1;

// console.log(num1 + "\n" + typeof num1);

// var str2 = "1234.5678";
// var num2 = +str2; // The Unary + Operator

// console.log(num2 + "\n" + typeof num2);

// function checkPassword(password){
//     if(password.length < 8 || password.length > 32){
//         return false;
//     }

//     if(!/[A_Z]/.test(password)){
//         return false;
//     }

//     if(!/[0-9]/.test(password)){
//         return false;
//     }

//     if (!/[!@#$%^&*+\-{}]/.test(password)) {
//         return false;
//     }

//     return true;
// }

// console.log(checkPassword("Abcdef123!123456789012345678901")); //true

// console.log(checkPassword("abcedf1230123456789012345678901")); //false


// const divElement = document.createElement('div');
// divElement.setAttribute('id', 'myDiv');
// divElement.setAttribute('class', 'container');

// const pElement = document.createElement('p');
// const textNode = document.createTextNode('Hello Everyone');

// pElement.appendChild(textNode);

// divElement.appendChild(pElement);

// document.body.appendChild(divElement);


// //------------------------------------------------------------
// const pElement = document.createElement('p');
// const textNode = document.createTextNode('Hello Everyone');

// pElement.appendChild(textNode);
// document.body.appendChild(pElement);

// const pElement = document.createElement('p');
// const textNode = document.createTextNode('Dynamic Content');

// pElement.appendChild(textNode);
// document.body.appendChild(pElement);

// function findMatches(value, ...arg){
//     if(arg.length < 2){
//         return "Number of arguments must be greater than or equal to 2"
//     }

//     var count = 0;
//     for(let i=0;i<arg.length;i++){
//         if(arg[i] == value){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));

// function program(prog){
//     var student = function(name){
//         return "Student name: " + name + ", \nProgram" + prog;
//     };
//     return student;
// }

// var function1 = program("Computer");
// console.log(function1("Joe"));

// function checkPassword(password){
//     if(password.length < 8 || password.length > 32){
//         return "password must be between 8-32 characters in length";
//     }

//     if(!/[A-Z]/.test(password)){
//         return false;
//     }
//     else if(!/[0-9]/.test(password)){
//         return false;
//     }
//     else if(!/[(!@#$%^&*-+{})]/.test(password)){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// console.log(checkPassword("Password1!"));
// console.log(checkPassword("Password12"));

// var student = {mark1:50, mark2:60,mark3:'C'};
// var sum = 0;
// for(x in student){
//     sum+=student[x];
// }
// console.log(sum);


// var a = 10;
// {
//      var a = 30;
//      b= 20;
// }

// for (var i = 0; i < 5; i++) { 
//      var c = i; 
// }

// console.log(a); 
// console.log(b); 
// console.log(c); 


function findMatches(value, ...arg){
    if(arg.length < 2){
        return "Number of arguments must be greater than or equal to 2"
    }

    let count = 0;
    for(let i=0;i<arg.length;i++){
        if(value === arg[i]){
            count++;
        }
    }
    return count;
}

console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));


function checkPassword(password){
    if(password.length < 8 || password.length > 32){
        return "validate the password according to the following rules : must be between 8-32 characters in length";
    }

    if(!/[A-Z]/.test(password)){
        return false;
    }
    else if(!/[0-9]/.test(password)){
        return false;
    }
    else if(!/[(!@#$%^&*-+{})]/.test(password)){
        return false;
    }

    return true;
}

console.log(checkPassword("pp134679"));
console.log(checkPassword("pP134679"));
console.log(checkPassword("pP!34"));
console.log(checkPassword("pP!34679"));

const parentElement = document.querySelector('.container');
const child1 = document.getElementById('child1');
const child2 = document.getElementById('child2');

parentElement.insertBefore(child2, child1);