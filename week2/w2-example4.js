function greeting4(name){
    function modifyName(name){
        name = name.toUpperCase();
        return name;
    }
    return "Hi " + modifyName(name);
}
console.log(greeting4("Joe"));
//console.log(modifyName("sam")); // out of scope.

function foo(x){
    function modify(){
        x*=10;
        return x;
    }
    return modify;
}

var y = foo(4); // y = function. function을 불렀기 때문에.
//console.log(typeof(y)); 

console.log(y());
console.log(y());
console.log(y());
console.log(y());

var t = foo(2);
console.log(t());

var count = 0;

function increament(){
    var count = 0;
    function inc(){
        count++;
        return count; 
    }

    return inc;
}

var counter1 = increament();

console.log(counter1());
console.log(counter1());
//count+=4;
console.log(counter1());
