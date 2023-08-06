function solution(my_string, n) {
    let a = [...my_string]
    let answer = a.map((item)=>{
        return item.repeat(n)
    }).join('')
    return answer;
}