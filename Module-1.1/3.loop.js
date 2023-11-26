//loop

// for loop ==> initializer , condition , increment/decrement


let arr = [1,2,3,4]
for (let index = 0; index < 10; index++) {
    
    console.log(index)
    
}


// while loop
let i = 1

while(i<10){
    console.log(i) 
    i++
}


let myArr = ["habib","kamal",30]

for(let data of myArr){
    console.log(data )
}

 

let info = {
    name:"Kamal",
    age:25,
    address:"Dhaka"
}

console.log("name" in info)

console.log(info.hasOwnProperty("age"))


//obj loop system
for(let key in info){

    console.log(info[key])
}


const objArr = [1,2,3,4,{name:"Ridoy",age:25},{name:"kamal"}]

for(let newArr of objArr){
   for(let abc in newArr){
    console.log(newArr[abc])
   }
    
}