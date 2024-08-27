//singleton
//object literals
const mySym =  Symbol("key1")
// symbol created 

const JsUser ={
    name: "Veer",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
} 

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);

Object.freeze(JsUser) //this will freezse the object and will not make changes after the freeze // 


