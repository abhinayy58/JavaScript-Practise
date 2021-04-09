// Method 1
// var a = [1, 3, 5, 7]
// console.log(a)
// var b = [4, 7, 2, 9]
// console.log(b)
// var c = a.concat(b)
// console.log(c)
// console.log(c.length)

//  Method 2
// var a = [1, 3, 5, 7]
// console.log(a)
// var b = [4, 7, 2, 9]
// console.log(b)
// var c = [...a, ...b];

// console.log(c)
// console.log(c.length)

// Object Merging
var Person = {
    name: "Abhinay Yadav",
    age: "24",
    Gender: "Male"
    
  }
   var Car = {
      Bname: "BMW",
      Cprice: "1237832"
     
   }
   var con = Person.concat(Car)
   console.log("The string is:"+con)
   var total = {
     ...Person,
     ...Car};
  console.log("the total is"+total)