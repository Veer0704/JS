
// Arrays are datastructures that can store multiple datatypes under single name
// They are mutable.

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Krishh", "Iron Man", "Thor"]

const myArr2 = new Array(1,2,3,4)


myArr2.push(6)
myArr.push(6)
console.log(myArr);
console.log(myHeroes);


console.log(myArr.includes(5));
console.log(myArr.indexOf(6));

const newArr = myArr.join(myHeroes)
console.log(newArr);

//slice and splice 

console.log("A", "", myArr);
const myn1= myArr.slice(1,3) // will show starting index value but not ending index value
console.log(myn1);
const myn2= myArr.splice(1,3)
console.log(myn2); //









