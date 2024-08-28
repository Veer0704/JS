

const regularUser = {
    email:"abc@gmail.com",
    userfullname:{
        firstname: "veer",
        lastname: "p" 
    }
}

console.log(regularUser.userfullname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2) //assign operator is used to copy enumerable objects from one and more sources to target object
console.log(obj3);
console.log(obj4); 



        
    
