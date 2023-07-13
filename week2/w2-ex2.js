function roll(sides = 6){
    return Math.floor(Math.random() * sides) + 1; // add the minimum number. Dice는 1부터 시작이기 때문에 +1
}

for(let i = 0; i < 10; i++){
    console.log(roll(6));// floor = round down.
}

function convert(celsius){
    return '32' + "F";
}

function convert(celsius) {
    var f = (celsius * 9/5) + 32;
    return f + " F";
  }
  
console.log(convert(0)); 

function convert2(value, t) {
    if (t === "C") {
      var c = (value - 32) * 5/9;
      return c + " C";
    } else if (t === "F") {
      var f = (value * 9/5) + 32;
      return f + " F";
    }
}

console.log(convert(122, "F"));
console.log(convert2(251.6, "F"));

function convert3(value, t){
    if(t == "C" || t == "c"){
        var c = (value * 9/5) + 32;
        return c + " F";
    }
    else if(t == "F" || t == "f"){
        var f = (value - 32) * 5/9;
      return f + " C";
    }
    else{
        return "Invalid type";
    }
}
