function solution(myString, pat) {
    
    let result = 0
    
    for (let i = 0; i < myString.length; i++) {
        console.log(myString.slice(i,i+pat.length))
        if (myString.slice(i,i+pat.length) === pat) {
          result += 1  
        } 
    }
    
    return result
}