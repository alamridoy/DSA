// user give input some string. this problem solve this string count how many character and count



  // time complexity O(n)
  // space complexity O(n)
function StringCount(str){
    let strObj = {}

    let strNormalized = str.toLowerCase()

    for (let index = 0; index < strNormalized.length; index++) {
        const strData = strNormalized[index];
        
        if(strData === ' ') continue
        if(strData in strObj){
            console.log(strData)
            strObj[strData] += 1
        }else{
            strObj[strData] = 1
        }      
        
    }

  return strObj
}

console.log(StringCount('he lloi i'))