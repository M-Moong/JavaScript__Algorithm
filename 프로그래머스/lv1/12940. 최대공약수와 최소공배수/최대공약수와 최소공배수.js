function solution(n, m) {
    // 최대공약수와 최소공배수를 반환하는 함수
    // 배열 맨앞은 최대 공약수
    // 그다음은 최소공배수
    
    // 최대공약수
    let gcd = 1;
    for (let i = 2; i<=Math.min(n,m); i++) {
        if(n % i === 0 && m % i === 0) {
            gcd = i
        }
    }
    
    // 최소공배수
    let lcm = 1;
    while(true){
      if((lcm % n === 0) && (lcm % m === 0)){
        break;
      }
      lcm++;
    }
    
    return [gcd, lcm]
}