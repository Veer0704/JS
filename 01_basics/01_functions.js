function sayMyName() {
    console.log("V");
    console.log("e");
    console.log("e");
    console.log("r");
}

sayMyName()

function sum(n1,n2){
    return n1+n2
}
const result = sum(3,5)
console.log("result",result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        
    }
    return `${username} just logged in `
}

console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username:"veer",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username:"veer",
    price:199
})

const mynewArray = [200,400,100,600]
function returnSecondValue(getArray){

    return getArray[0]
}

console.log(returnSecondValue(mynewArray));
