

// var twoSum = function(nums, target) {
// let firstInd
//     for (let index = 0; index < nums.length; index++) {
   
//        firstInd = nums[index]

    
//     }
//     console.log(firstInd)


    
// };

// console.log(twoSum([2,7,11,15],9))


// function abc(str,char){

//     let count = 0
//     for(let val of str){
//         val === char &&  count++;
//     }
//      return count
// }

// console.log(abc('ridoyyy','o'))


function abc(str){

    let lowerCase = str.toLocaleLowerCase()

    let result = lowerCase.split(' ')

    for (let index = 0; index < result.length; index++) {
       //result[index] = result[index][0].toUpperCase()
       console.log(result[index])
       result[index] = result[index][0].toUpperCase() + result[index].slice(1)
        
    }
    return result.join(' ')
    

   
}

console.log(abc('The name of out country name is bangladesh'))

// this is a new json file 


let a = 'this is world and it is larger'
console.log(a.slice(5))




function removeDuplicate(nums) {

    let uniqueArr = [];

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
        
    }
    console.log(uniqueArr)
    return uniqueArr;
}

console.log(removeDuplicate([1, 2, 3, 4, 2, 4, 5, 6, 1,1]));






// Question : here two array num1 = [1,2,3,4,5] and num2 = [1,2,3,1,2,1,3,4,5,2,3,4,1]. out this answer how many time first array number have second number
// time complexity O(n+n) => O(n)
function countArray(num1, num2) {
    let trackCountArray = {};
  
    for (let numElement of num1) {
      
        trackCountArray[numElement] 
      
    }
  
    for (let countElement of num2) {
      if (countElement in trackCountArray) {
        trackCountArray[countElement]++;
      } else {
        trackCountArray[countElement] = 1;
      }
    }
  
    return trackCountArray;
  }
  
  console.log(countArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 1, 2, 3,3,3,3,5]));
  



  // Q: Write a program that prints the numbers from 1 to 100 . But for multiple of three print "Fizz" instead of the number and for the multiple of five print "Buzz".FOr numbers which are multiples of both and five print "FIzzBuzz"

  function calculate(){
  let obj = {}
    for (let index = 1; index <= 60; index++) {
        const element = index
        obj.element = element

        if(element % 3 == 0 && element % 5 == 0){
            obj.element = "FizzBuzz"
        }else if(element % 3 == 0) {
           obj.element = "Fizz"
          
        }else if(element % 5 == 0){
            obj.element = "Buzz"
        }
        console.log(obj) 
    }
  

  }

  calculate()