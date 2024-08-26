let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date("2023-4-23") //months start from 0 to 11 in js if written in (dd,mm,yy) format  //
console.log(myCreatedDate);
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());




