var c = 300 //global scopes
let a = 400
if (true) {
    let a = 10
    const b = 20 //block scopes
    console.log(b);
}


console.log(a);

console.log(c);


