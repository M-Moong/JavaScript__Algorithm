function solution(age) {
    alpha = ['a','b','c','d','e','f','g','h','i','j']
    const a = String(age).split('')
    let answer = a.map((item)=>{
        return alpha[item]
    }).join('')
    return answer
}