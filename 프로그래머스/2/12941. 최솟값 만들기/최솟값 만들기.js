function solution(A,B){
    // 길이가 같은 배열 A, B (자연수로 이루어져 있다.)
    // 각각 한개의 숫자를 뽑아 두수를 곱한다.
    // 이러한 과정을 배열의 길이만큼 반복한다.
    // 두 수의 곱한 값을 누적하여 더한다.
    // 최종적으로 누적된 값이 최소가 되도록 만드는것이 목표
    // k번째는 사용했다면 다시 k번째를 사용할수 없다.
    let answer = 0;
    
    const firstArray = A.sort((a,b)=> a-b);
    const secondArray = B.sort((a,b)=> b-a); 
    
   for (let i = 0; i < A.length; i++) {
       answer += firstArray[i]*secondArray[i];
   }
    return answer;
}