function solution(n) {
    // x가 짝수이면, 2로 나누고
    // x가 홀수이면, 3 * x + 1 로 바꾼다.
    

    let answer= [];
    
      
    while( n > 0) {
        
        answer.push(n)
        
        if ( n === 1) break;
        
        if(n % 2 === 0) {
            
            n = n/2
        } else {
            
            n = 3 * n +1
        }
    }
    
    return answer
}