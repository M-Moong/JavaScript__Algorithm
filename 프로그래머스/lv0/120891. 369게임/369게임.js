function solution(order) {
    let array = [...String(order)]
    return array.filter(item=> item ==='3' || item === '6' || item === '9').length    
}