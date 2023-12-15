// compare 2 array have match value


// time complexity O(n^2)
// space complexity O(1)
function isElementExists(arr1,arr2){
    
    for (let index = 0; index < arr1.length; index++) {
        const elementarr1 = arr1[index];

        for (let i = 0; i < arr2.length; i++) {
            const elementarr2 = arr2[i];

            if(elementarr1 === elementarr2){
                return true
            }
            
        }
       
        
    }
    return false
 
}
console.log(isElementExists(['a','b','c'],[1,2,3,'z','c']))



function isElementExists(arr1,arr2){
    
    for (let index = 0; index < arr1.length; index++) {
        const elementarr1 = arr1[index];

        if(arr2.includes(elementarr1)){
            return true
        }
        
    }

    return false
    

   
 
}
console.log(isElementExists([1,2,3,'a','c'],[4,8,7,0,'a']))

