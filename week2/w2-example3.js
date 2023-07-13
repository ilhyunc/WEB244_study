var a = 15; // local
function doit(){
    b = 19; //Globals
    var c = 12;
    console.log("a = "+a);
    {
        var d = 12; // function scope일때 하나의 functio안에서는 가능?
        let e = 7;
    }
    console.log("d = "+d);
    console.log("e = "+e);
}

doit();
console.log("b = "+b);
//console.log("c = "+c); // c is not defined. 
// let & var is local variable