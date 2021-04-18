// How to get first n element in an array?
const data = () => {
 let   arr = [1,2,3,4,5,6,7,8]
 let i = 5
 console.log(arr.splice(0, 3))
 console.log(arr.splice(0, i))
}
data();

// How to check if an array includes a value in javascript?

const sec = () => {
    let temp = [1,2,3,4,5,6,7,8]
    console.log(temp.includes(8))
    console.log(temp.indexOf(4) !== -1 )
}
sec();


// How to remove a property from javascript object
const deleteproperty = () => { 
    let temobj = {
        id:1,
        name: 'Abhinay',
        value: 23,
        data: 'This is a important notification '
    
    }
     delete temobj.id
      //console.log(temobj);

      delete temobj["name"]
      //console.log(temobj);


      let i = "value"
      delete temobj[i]
      console.log(temobj)
}


deleteproperty();

// How to find length of a javascript object?

const returnlength = () => {
    let obj = {
        id: 1,
        name: 'Abhinay',
        data: "This is confidential data",
        value: 300
    }
   return Object.keys(obj).length
}
console.log(returnlength())

// How to Merge Property of two objects dynamically in javascript?
const mergeobj = () => {
    let obj1 = {
        id:1,
        name: "Abhinay yadav"
    }

    let obj2 = {
        p1: "prop1",
        p2: "prop2"
    }
     let z = {...obj1, ...obj2}
     console.log(z)
}

mergeobj();




// How to check weather a string contains a substring or not in javascript?

const checkstring = () => {
    let x = "Abhinay"
    console.log(x.includes('ay'))
    console.log(x.indexOf('Ab') ==0 )
}
checkstring();



// How to remove a specific item from an array?
const removeitem =  () => {
    let arr = [1,2,3,4,5,6,7,8,9];
    arr.splice(0,1)
    console.log(arr)
    // second way
    let data = arr.filter(x => x !== 1)
    console.log(data)

}

removeitem();

// How to Get current url using javascript? 

// const geturl = () => {

//     return window.location.href

// }
// console.log(geturl());

// How to replace a particular item in array in javascript

const replaceitem = () => {
    let x = [1,2,3,4,5,6,7,8]


    x.splice(4, 1, 0)
    console.log(x)
}

replaceitem();

// How to insert item in array at specific index in javascript? 
const insertarr = () => {
    let x = [1,2,3,4,5,6,7,8]

   x.splice(2,0,0)
   console.log(x)
}

insertarr();

// How to loop through an object in javascript?
const loopobj = () => {

    let obj = {
        id:1, 
        name: "Abhinay"
    }
for(let i of Object.keys(obj))
console.log(i,'=>',obj[i])


}
loopobj();



// How to replace all the occourances of a string in javascript? 
const replacestring = () => {
  let s = "Abhinay"
 let z =  s.replaceAll("A","r")
   console.log(z)

}
replacestring();


// How to roung to two decimal values in javascript?
const roundvalue = () => {
    let x = 1.8333333;
    let y = Math.round(x*100)/100;
    console.log(y)
    let z = x.toFixed(2);
    console.log(z)
}
roundvalue();






// How to check if object is an array in javascript? 

const isobject = () => {
    let x = {
       id:1,

    }

    console.log(Array.isArray(x));
}

isobject();






