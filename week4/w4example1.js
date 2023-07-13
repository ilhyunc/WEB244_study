var person1 = {
    firstName:"Joe", 
    "last name": "Cho",
    age:30,
    lastAcess: new Date(),
    address: {streetNumber: 50, street: "Charles St E", city: "Toronto"}, //{} - another object
    print:function(){
        console.log(`The name is ${this.firstName} ${this["last name"]} and the age is ${this.age}`)
    }
};
    
    // Create Objects - using function contsructor
    function PersonV2(f= "xxxx",l= "yyyy",a= 18) {
        this.first = f;
        this.last = l;
        this.age = a;
        this.lastAccess = new Date();
        this.print = function(){
            console.log(`The name is ${this.firstName} ${this["last name"]} and the age is ${this.age}`)
        };
    };
    
person1.height = "";

console.log(person1.firstName);
console.log(person1["firstName"]); //string
console.log(person1["last name"]);
console.log(person1.age);
console.log(person1.lastAcess);
console.log(person1.address.street);
console.log(person1.height);

person1.print();

var p1 = new PersonV2("Joe", "Cho", 30);
p1.print();
var p2 = new PersonV2();
p2.print();

PersonV2.prototype.height = "174cm";
console.log(p1.height);
console.log(p2.height);


   
function findMatches(valueToFind, ...arg) {

    if (arg.length < 2) {
   
     return "Number of arguments must be greater than or equal to 2";
   
    }
   
   
   
    let count = 0;
   
    for (let i = 0; i < arg.length; i++) {
   
     if (arg[i] === valueToFind) {
   
      count++;
   
     }
   
    }
   
   
   
    return count;
   
   }
   
   
   
   console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));
   
   


   function add(x, y) {
   
      return x + y;
   
   }
   
   alert(add(5, 3));

   
const add = (x, y) => x + y; 