function solution(n) {
    let a = n/7
    let answer = Math.floor(a);
    if(n%7 > 0 ) {
        answer += 1
    }
    return answer;
}