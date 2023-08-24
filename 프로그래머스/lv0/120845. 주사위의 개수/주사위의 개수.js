function solution(box, n) {
   
    const a = parseInt(box[0] / n)
    const b = parseInt(box[1] / n)
    const c = parseInt(box[2] / n)
    
    let answer = a * b * c;
    
    return answer;

}