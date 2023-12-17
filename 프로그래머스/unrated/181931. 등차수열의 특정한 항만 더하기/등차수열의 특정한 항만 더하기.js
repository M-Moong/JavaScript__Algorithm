function solution(a, d, included) {
    // 두 정수 a, d 
    // 길이가 n인 boolean배열 included
    // 첫째항이 a, 공차가 d인 등차수열
    // included[i]가 i+1항을 의미
    
    let answer = [a];
    
    for (let i = 1; i < included.length; i++) {
        answer[i] = d * i + a
    }
    
    return answer.filter((item, index) => included[index] === true).reduce((acc, cur) => acc + cur)
    

    
    
}