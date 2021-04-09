const groceryList = [
    {name: "Apple", price: 25, category: "fruits"},
    {name: "Mangoes", price: 35, category: "fruits"},
    {name: "Tomatoes", price: 15, category: "veg"},
    {name: "Milk", price: 20, category: "misc"},
    {name: "Bread", price: 12, category: "misc"},
    {name: "Eggs", price: 18, category: "misc"}
];
   console.log(groceryList);



// forEach

groceryList.forEach(item => {
    console.log('the price for ' +item.name ,'is', +item.price);
})

//map

const newPrice = groceryList.map(item => {
    return {name: item.name, price:item.price * 2}
    
})
console.log(newPrice)

//filter 
const fruitList = groceryList.filter(item => {
    return item.category === 'fruits';
    
})
console.log(fruitList);

//find

const result = groceryList.find(item => {
    return (item.category).toLowerCase() === 'veg';
    
})
console.log(result);

//findIndex

const results = groceryList.findIndex(item => {
    return (item.category).toLowerCase() === 'fruits';
    
})
console.log(results);


//sort 

const sortedArray = groceryList.sort((a, b) => {
    //return a.name.localeCompare(b.name)
     return b.name.localeCompare(a.name)
    // return a.price - b.price
    //return b.price - a.price
})
console.log(sortedArray)

// some

const checkprice = groceryList.some(item => {
    return item.price > 20;
})

console.log(checkprice)

//every
const checkprices = groceryList.every(item => {
    //return item.price > 20;
    return item.price > 10;
})


console.log(checkprices)

//reduce
let initialvalue = 0
const total = groceryList.reduce((currenbTotal, item) => {
  
    return item.price + currenbTotal;
},initialvalue)


console.log(total)


//include
const numbers = [1,2,3,4,5,6];
 console.log(numbers.includes(5));



 //concat

 const num =  [1,2,3,4,5,6];
 const lett = ['a','b','c','d'];

 console.log(num.concat(lett))

 //flat

 const num1 =  [1,2,3,4,[5,6,[7,8]]];


 console.log(num1.flat(2))


 //flatmap 
 const num2 =  [1,2,3,4,[5]];


 console.log(num2.flatMap(num =>{
     return num * 2;
 }))





















