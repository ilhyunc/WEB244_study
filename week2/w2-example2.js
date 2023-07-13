function greeting1(){
    console.log("Hello");
}
greeting1();

function greeting2(){
    return "Hello";
}

var g = greeting2();
console.log(g)

function greeting3(name){
    //return "Hello "+name;
    //return 'Hello '+name;
    //return `Hello `+name;
    return `Hello ${name}`; // only ``
}
console.log(greeting3("Joe"));

function sum(n1, n2){ // C언어랑 같음.
    return n1+n2;
}
console.log(sum(3,5)); // 8
console.log(sum(3)); //NaN
console.log(sum()); //NaN
console.log(sum('3', '5')); // 35, string으로 인식.
console.log(sum(3, 5, 9)); // 2번째 파라미터 까지만 인식. 3번째꺼 버림

function sum2(){
    var s = 0;
    for(var i = 0; i < arguments.length;i++){
        s+=arguments[i];
    }
    return s;
}
console.log(sum2(3, 5, 9));





var m = greeting2(); // m is string "Hello" greeting1 은 return이 없어서 undefined로 나옴.
console.log(m);

var f1 = greeting2; // f1은 function, f1 is copy greeting2
console.log(typeof(f1));
console.log(f1()); // f1 function을 call한거 
console.log(f1);
f1 = 5;
//console.log(f1()); // f1은 이미 function이기 때문에 number가 들어갈수 없음.
console.log(f1);

//function expression
var f2 = function(){
    return "Good afternoon";
};
console.log(f2());

const fun3 = function(n1, n2){
    return n1 + n2;
};

console.log(fun3(3,5));

const fun4 = function(n1, n2){
    return n1 + n2;
}(1,2);

console.log(typeof(fun4)); 
console.log(fun4); 

var amount = 165.25456
console.log(amount.toFixed(4));

