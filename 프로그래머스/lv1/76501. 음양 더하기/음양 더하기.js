function solution(absolutes, signs) {
    for (let i = 0; i < absolutes.length; i++) {
        
        if (signs[i]) {
                absolutes[i] *= 1
            } else {
                absolutes[i] *= -1
            }
    }
    
    const answer = absolutes.reduce((acc,cur) => {
        return acc + cur
    },0)

    return answer;
}