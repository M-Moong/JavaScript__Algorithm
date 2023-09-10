function solution(my_string) {
    let answer = []
    let a = my_string.split('')
    a.map((item)=>{
        if(!answer.includes(item)){
        answer.push(item)
        }
    })
    return answer.join('')
}