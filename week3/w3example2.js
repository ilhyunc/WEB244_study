var str1 = "Welcome to Toronto";
var reg1 = /to/;
console.log(reg1.test(str1));
var reg2 = /TO/;
console.log(reg2.test(str1));
var reg3 = /TO/i;
console.log(reg3.test(str1));
var reg4 = /Toronto/i;
console.log(reg4.test(str1));
var reg5 = /^Toronto/; // Toronto로 시작하는가? 아니기때문에 false
console.log(reg5.test(str1)); 

var reg6 = /Toronto$/; // Toronto로 끝나는가? 맞기때문에 true
console.log(reg6.test(str1));
console.log(/^W.*e/.test(str1)); // W으로 시작하고 0 or more캐릭터와 e로 끝남 true
console.log(/^W.+e/.test(str1)); // W으로 시작하고 1 or more캐릭터와 e로 끝남 true
console.log(/c.*ome/.test(str1)); // c와 ome 사이에0 or more true
console.log(/c.+ome/.test(str1)); // c와 ome 사이에1 or more false 
console.log(/W.{3,}e/.test(str1)); // W와 e사이에 at least 3가지 캐릭터가 들어있음
console.log(/[Ww]elcome/.test(str1)); // W와 e사이에 3가지 캐릭터가 들어있음



var pattern1 = /^[a-zA-Z0-9]{4,}$/;
console.log(pattern1.test("Hello"));
console.log(pattern1.test("abcd12h"));