function solution(s){
    let count = 0;
    
    const array = s.split('')
    
    for(item of array) {
        if(count < 0) return false
        if(item === '(') count++
        if(item === ')') count--
    }
    
    return count === 0 ? true : false
    
}