function solution(a, b) {
    let c = 0;
    for(let i = 0; i < a.length; i++) {
        c += a[i]*b[i]
    }
    return c;
}