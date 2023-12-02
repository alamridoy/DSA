

// some example

// test-1
// this code depended math condtion if value up to 5 then it is wrost case & if it is less than5 it is best case
function logAtLeast(n){
for (let index = 0; index <= Math.max(5,n); index++) {
    console.log(index)
    
}
}
logAtLeast(6) // ==> O(n)
//logAtLeast(3) ==> O(1)


// test-2

function logAtLeastMin(n){
    for (let index = 0; index <= Math.min(5,n); index++) {
        console.log(index)
        
    }
    }
    logAtLeastMin(5) // ==> O(n) if less than 5 it is worst case
    //   logAtLeastMin(10) // ==> O(1) if grather than 5 it is best case


