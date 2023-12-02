// THis is learining describle Big O part

// Big-0 (worst case)
// Omega(best case)


// linear f(n)=>O(n)
function log(n){
    let count = 0
        for (let index = 0; index < n; index++) {  //  when input is depending on operation rate
          count++
            console.log(index)
            
        }
         console.log(count)
    }
    log(10)
    
    
    
    // quadratic f(n)= O(n^2)
    function log(n){
            let count = 0
            for (let i = 0; i < n; i++) {  // when give input get sqr operation  
              for (let j = 0; j < n; j++) {
                console.log(i, j)
                count++ 
              }
                
            }
            console.log(count)
        }
    log(2)
    
    
    
    //linear
    //O(n) +O(n) = O(2n) => O(n)
    function log(n){
        let count=0
       for (let i = 0; i < n; i++) {  //O(n)
        count++
         console.log(i)  
       }
    
       for (let i = 0; i < n; i++) {   //O(n)
        count++
        console.log(i)  
        
       }
       console.log(count)
    }
    log(2)
    
    
    
    
    // O(n * n* n) =O(n^3)
    function log(n){
        let count=0
       for (let i = 0; i < n; i++) {  //O(n)
        for (let i = 0; i < n; i++) {   //O(n)
            for (let i = 0; i < n; i++) {   //O(n)
                count++
                console.log(i)  
                  }
             }
       }
    }
    log(2)
    
    
    
    
    // O(n^2) + O(n) = O(n^2 + n) ==> O(n^2)
    function log(n){
      
       for (let i = 0; i < n; i++) {  //O(n)
        for (let i = 0; i < n; i++) {   //O(n)   
            console.log(i)     
           }
       }
       for (let i = 0; i < n; i++) {   //O(n)
        console.log(i)  
       }
    }
    log(2)
    
    
    // constant  f(n) = O(1)
    function log(n){
      console.log(n+n+n)
     }
     log(10)
    
    
        
    