var arr1 = [33, 6,"Hi",true];
var arr2 = [];
console.log(arr1);
arr1.push("Joe");
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);
arr1.unshift("Sam");
console.log(arr1);
var e = arr1.pop();
console.log(arr1);
console.log(e);

e = arr1.shift();
console.log(arr1);
console.log(e);

var arr3 = ["Welcome","To","JS"];
var s = arr3.join();
console.log(s);

var s = arr3.join('seneca');
console.log(s);

var arr4 = [4,7,2,5,6,9,10,1,4,1];
var arr5 = arr4.slice(2,5);
console.log(arr5);

var colors = ['red', 'blue', 'yellow', 'white'];
console.log(colors);

for(let i =0;i<colors.length; i++){
    console.log(`Color ${i+1}: ${colors[i]}`);
}

function print(e){
    console.log(e);
}
print(5);

colors.forEach(print);

function double(e){
    e*=2;
    return e;
}
var nums = [3,5,6];
var arr6 = nums.map(double);
console.log(arr6);

function even(e){
    return e%2 === 0 ;
}

var element = nums.find(even);
console.log(element);

var arr8 = nums.filter(even);
console.log(arr8);

