

let num = 30

let res = num>20 ? "Hello":"sdd"
console.log(res)


function add(num1,num2){
    let res = (num1+num2) /2
    return res
}

console.log(add(10,20))
console.log(add(30,60))




for (let i = 0; i < 3; i++) {
   

    for (let j = 0; j < 3; j++) {
       
        console.log(i,j)
       
        
    }
 

    console.log(i)
    
}


let myFun= (num)=>{
let sum = 0
for (let index = 0; index < num; index++) {
   sum+=index
}
 return sum
}
console.log(myFun(10))