function solution(slice, n) {
    let answer = Math.floor(n/slice)
    if (!(answer === (n/slice))) {
        answer += 1;
    }
    return answer;
}