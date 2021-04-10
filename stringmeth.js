var stringone = "hello everyone I am Abhinay yadav. "
var stringtwo = "I am styding in cmrit and i am a devloper."

// charAt
 console.log(stringone.charAt(1))
 console.log(stringtwo.charAt(5))

 // charcodeat
 console.log(stringone.charCodeAt(1))
 console.log(stringtwo.charCodeAt(5))

 //concat
 console.log(stringone.concat(stringtwo))

 // endwith
 console.log(stringone.endsWith("yadav. "))
 console.log(stringtwo.endsWith("cmrit"))

// fromcharcode
console.log(String.fromCharCode(115 ))

// includes()
console.log(stringone.includes("yadav"))
console.log(stringtwo.includes("yadav"))

//indexof
console.log(stringtwo.indexOf("am"))

//indexof
console.log(stringtwo.lastIndexOf("am"))

//match
console.log(stringtwo.match(/am/g))

//repeat

console.log(stringone.repeat(4))

// replace

console.log(stringtwo.replace(/am/g, "AM"))

//search

console.log(stringtwo.search("am"))

// slice

console.log(stringtwo.slice(2, 4))

//split
console.log(stringone.split(" "))

//startwith
console.log(stringone.startsWith("I"))
console.log(stringtwo.startsWith("I"))

//substr

console.log(stringtwo.substr(2, 4))

//substring

console.log(stringtwo.substring(2, 4))


//tolowercase
console.log(stringtwo.toLowerCase())

//touppercase
console.log(stringone.toUpperCase())

//trim
const stringthree = "     subscribe now!     "
console.log(stringthree.toUpperCase().trim())