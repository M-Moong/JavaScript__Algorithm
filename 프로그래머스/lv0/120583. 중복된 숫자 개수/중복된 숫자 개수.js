function solution(array, n) {
    const b = array.filter((item)=>{
        return item == n
    })
    let answer = b.length;
    return answer;
}