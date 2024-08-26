//strings are sequence of characters //

const name = "Veer"
const repoCount = 6

console.log(name + repoCount + " Value"); //outdated syntax

//use of backticks is more proficient // 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('VeerPT')
const gameType = new String('TP')
const s3= gameName+gameType
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.concat(gameType));
console.log(s3);
console.log(s3.length);
console.log(s3.charAt(4));

 const newString = gameName.substring(2,5)
 console.log(newString);
 
 const anotherString = gameName.slice(-8,4)
console.log(anotherString);






/* common string methods:
split
concat
trim
toLowerCase
toUpperCase
charAt
indexof
subString
slice
replace
length
startswith
endswith
