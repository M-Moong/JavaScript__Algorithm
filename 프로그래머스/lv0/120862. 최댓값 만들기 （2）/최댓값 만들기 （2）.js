function solution(numbers) {
    const a = numbers.sort((a,b)=>b-a)
    let b = a.length
    if ((a[b-1] * a[b-2]) > a[0] * a[1]) {
        return (a[b-1] * a[b-2])
    } else {
        return a[0] * a[1]
    }
}