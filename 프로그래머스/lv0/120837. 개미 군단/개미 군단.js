function solution(hp) {
    // 장군개미 5
    // 병정개미 3
    // 일개미 1
    let count = 0;
//     if(parseInt(hp/5) >= 1) {
//         let a = parseInt(hp/5)
//         hp -= a * 5
//         count += a
//     }

//     if(parseInt(hp/3) >= 1) {
//         hp -= parseInt(hp/3) * 3
//         count += parseInt(hp/3)
//     }

//     if(parseInt(hp/1) >= 1) {
//         hp -= parseInt(hp/1) * 1
//         count += parseInt(hp/1)
//     }
    
    
    for (let i = 5; i > 0; i-=2) {
        if(parseInt(hp/i) >= 1) {
            let a = parseInt(hp/i)
            hp -= a * i
            count += a
        }
    }
    return count;
}