function solution(x, n) {
    var answer = [];
    
    for (let i = 1; i<=n; i++) {
        //answer[0] = x;
        //answer[i] = answer[i-1] + x 
        
        answer.push(x*i);
        
    }
    return answer;
}