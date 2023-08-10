function solution(hp) {
    // 장군개미 5
    // 병정개미 3
    // 일개미 1
    let count = 0;
    for (let i = 5; i > 0; i-=2) {
        if(parseInt(hp/i) >= 1) {
            let a = parseInt(hp/i)
            hp -= a * i
            count += a
        }
    }
    return count;
}