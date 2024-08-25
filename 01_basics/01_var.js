const accountID = 144553 //will not update the value once assigned
let accountEmail = "veer@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// variables can be declared by let and var both
//accountID = 2 // not allowed 
//lets try updating the values 

accountEmail="hc@gmail.com"
accountPassword="21212121"
accountCity="Bangalore"


/* 
Prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
