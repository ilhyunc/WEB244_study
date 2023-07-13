// var str1 = "Welcome to Toronto";
// var str2 = 'Joe';
// var str3 = `Hello ${str2}`;// only using `` back tick
// var str4 = new String("See you");

// console.log(str3);
// console.log(str1 + " " + str2 + " " + str3 + " " +str4);
// console.log(str3.length);
// console.log(str2.charAt(2));
// console.log(str2.charCodeAt(2));

// var str5 = "Hello " + "Sam";
// var str6 = "Hello ".concat("Tom");
// console.log(str6);
// str4 = "Hello ".concat(str2," Cho");
// console.log(str4);

// var str1 = "Welcome to Toronto";
// console.log(str1.indexOf('to'));
// console.log(str1.indexOf('to'));
// console.log(str1.lastIndexOf('Hello')); // 매치되는 값이 없을땐 -1출력.

// var words = str1.split(' ');
// console.log(words);
// var words = str1.split('t');
// console.log(words);
// var chars = str1.split('');
//console.log(chars);

var str1 = "Welcome  to   Toronto";
var words = str1.split(' ');
console.log(words);
words = str1.split(/\s+/);
console.log(words);
console.log(str1.substr(3,6)); //  output = come
console.log(str1.substring(3,6));//  output = com
console.log(str1.substring(3));//  output = come  to   Toronto
console.log(str1.toUpperCase());// output = WELCOME  TO   TORONTO
console.log("     Hello     ".trim());
console.log("     Hello     ".trim().toUpperCase().charAt(1));

String.prototype.greeting=function(){
    return "Hello " + this;
}
var str9 = "Joe"
console.log(str9.greeting());

String.prototype.reverse=function(){
    var rev = '';
    for (var i = this.length -1; i >= 0; i--)
        rev +=this[i];
    return rev;
}
console.log(str9.reverse());

