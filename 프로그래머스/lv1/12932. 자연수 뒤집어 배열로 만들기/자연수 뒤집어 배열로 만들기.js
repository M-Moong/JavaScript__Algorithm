function solution(n) {
    var answer = [];
    n = (n+'')
    let b = n.split('')
    
    for (let i =0; i<b.length; i++) {
        answer.push(+(n.slice(i,i+1)))
    }


    return answer.reverse();
}