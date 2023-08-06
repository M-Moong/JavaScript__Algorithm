function solution(s) {
    const a = [...s]
    if(a.length % 2 === 0) {
        const b= a.length/2 
        return a[b-1]+a[b]
    } else {
        const b= Math.ceil(a.length/2) - 1
        return a[b]
    }
}