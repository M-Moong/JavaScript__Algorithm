function solution(n) {
    let a = []
    for(let i = 0; i < n; i++) {
        if(i % 2 == 0) {
            a[i] = '수'
        } else {
            a[i] = '박'
        }
    }
    return a.join('');
}