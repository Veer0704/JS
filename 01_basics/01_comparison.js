// while comparing always check that the datatypes are same //
// comparisons and equality checks are different // 


console.log(null>0);
console.log(null == 0);
console.log(null >= 0);


// The == and >=, <= work differently //
// The comparisons convert null to a number treating it as 0 //

console.log(undefined == 0);

// undefined always gives false //

// "===" is a strict check //
console.log("2"===2);
/*this  gives false as it will strict check the datatypes 
 comparing a string to the number*/