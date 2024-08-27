//Primitive datatypes 
/* 7 types : String, Number ,
             Boolean , null , 
             undefined, Symbol, 
             BigInt 
*/

const score = 100
const scoreValue = 100.3
 
const isLoggedIn = false
console.log(typeof isLoggedIn);

const outsideTemp = null //return type will be object // 
console.log(typeof outsideTemp);

let userEmail; //currently undefined //

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
console.log(typeof anotherId);



console.log(id===anotherId);

const bigNumber = 3456745453253523523523n //bigInt
console.log(typeof bigNumber);




//Non Primitive or Reference datatypes
// Array, Objects, Functions


const heroes = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "Veer",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof myObj);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory types : stack and heap 
// all primitive datatypes : stack memory
// all non primitive datatypes : heap memory

let myName = "veer" // a primitive type and it will go to stack

let anotherName = myName // this value got added to stack
anotherName = "vir" //this value overlapped the value in stack
console.log(anotherName);
console.log(myName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@sby"  /* user 1 added to stack but email upi will be added to heap*/

}

let user2 = user1 //this will get added to stack but will get reference from heap memory//
console.log(user1.email);
console.log(user2.email);


