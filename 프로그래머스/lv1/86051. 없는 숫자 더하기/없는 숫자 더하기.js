function solution(numbers) {
    let a = 45;
    const dd = numbers.reduce((acc, cur) => {
        return acc + cur
    })
    
    return a - dd;
}