function solution(d, budget) {
    // 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원
    //  1,000원보다 적은 금액을 지원해 줄 수는 없습
    // 부서별로 신청한 금액이 들어있는 배열 d
    // 예산 budget이 매개변수
    // 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
    let answer = 0;
    let a = d.sort((a,b)=>a-b)
    
    for (let i = 0; i < a.length; i++) {        
        if(budget >= a[i]) {
            console.log(i)
            budget -= a[i];    
            answer = i+1 
        } else {
            return answer = i
        }
        
    }
return answer;
    
}