function solution(n, k) {
    let answer = 12_000 * n + 2_000 * k
    if (n/10 >= 1) {
        answer -= Math.floor(n/10) * 2000;
    }
    return answer
}