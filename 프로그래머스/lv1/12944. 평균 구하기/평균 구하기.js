function solution(arr) {
    const answer = arr.reduce((a,b) => (a+b));
    return answer / arr.length;
}