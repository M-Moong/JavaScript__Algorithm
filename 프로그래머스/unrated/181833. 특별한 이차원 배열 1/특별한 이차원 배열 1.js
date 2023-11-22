function solution(n) {
    let answer = [];
    for ( let i = 0; i < n; i++) {
        let inner = [];
        for ( let j = 0; j < n; j++) {
            if ( i === j) {
                inner.push(1)
            } else {
                inner.push(0)
            }
        }
        answer.push(inner)
    }
    
    return answer
}