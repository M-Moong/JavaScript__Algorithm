function solution(n_str) {
    const a = [...n_str]
    while(a[0] === "0") {
        a.shift(a[0])
    }
    return a.join('')
}