//object (performance) - Big(O)

let info = {
    name:"Ridoy",
    "11email": "ridoy@gmail.com"
}

// two way access object
console.log(info.name)
console.log(info['name'])

console.log(info["11email"]) // invalid email format use access this system



let obj = {
    name:"Ridoy",
    email: "ridoy@gmail.com"
}

console.log(obj.name)   // O(1) we know position
console.log(obj.email)   // O(1) we know position


// add properties  => O(1)
obj.address = 'Dhaka'
console.log(obj)


// delete properties => O(1)
delete obj.address
console.log(obj)

// searching indexing
console.log('email' in obj)  // O(1)

for (let key in obj) {  // O(n) looping and searching
    console.log(obj[key]);
    if (obj[key] === 'Ridoy') {
     console.log("True")
    }
  }



  // Object.keys()
  console.log(Object.keys(obj)) // O(n)


  // Object.values()
  console.log(Object.values(obj)) // O(n)


    // Object.entries()
    console.log(Object.entries(obj)) // O(n)
  