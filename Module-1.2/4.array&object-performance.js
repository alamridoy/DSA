// Array(performance) - Big(O)




let arr = [1,2,3,4,5]

console.log(arr[arr.length-1])
console.log(arr.length)


// adding new element  big O(1)=> index is knowing
arr[arr.length] = 6

console.log(arr)

arr.push(7)
console.log(arr)



// removing element  big O(1)  => index is knowing
arr.pop()
console.log(arr)

arr.pop()
console.log(arr)



// beginning added element   big O(n) => because when added new element in the beginning then shifted the all index number so thats why its O(n)
arr.unshift(10)
console.log(arr)
arr.unshift(15)
console.log(arr)

arr.shift()
console.log(arr)



//   forEach, map , filter, reduce, slice, splice  => O(n)