function solution(arr) {
    // reduce 함수를 알고 푼 방식
    const answer = arr.reduce((a,b) => (a+b));
    return answer / arr.length;
    
    // for문을 돌리는 방식
    // let sum;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    // return sum/arr.length;
}
