function buildArray(n1, n2){
    var array = [];
    for(let i=n1; i<=n2; i++){
        array.push(i);
    }
    return array;
}
console.log(buildArray(5, 10));

function addDollars(arr){
    function m(e){
        return "$" + e;
    }
    return arr.map(m);
}
console.log(addDollars([1, 2, 3, 4]));