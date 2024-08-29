const user = {
    username: "veer",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        

    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

function one() {
    let username = "veer1"
    console.log(this.username);
    
}
one()

const v = () => {
    let username = "abc"
    console.log(this);
    
}

const addTwo = (num1, num2) =>  num1+num2

console.log(addTwo(3,4));


//const myArray = [ 2,3,4,5,6]
//myArray.forEach()