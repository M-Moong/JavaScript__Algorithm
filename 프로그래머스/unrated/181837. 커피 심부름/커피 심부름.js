function solution(order) {
    // 아메리카노 4500, 라뗴 5000
    // 직원이 적은 메뉴 문자열 배열 order
    
    let answer = 0
    
    order.forEach(item=> {
        if(item.includes('latte')) {
            answer += 5000
        } else {
            answer += 4500
        }
    })
    
    return answer
}