

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
