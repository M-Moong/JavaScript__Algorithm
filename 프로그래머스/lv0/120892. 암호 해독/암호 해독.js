function solution(cipher, code) {
    const a = cipher.split('')
    const b = [];
    for (let i = 0; i < a.length+1; i++) {
        if (i !== 0 && i % code == 0){
            b.push(a[i-1])
        }
    }
    const answer = b.join('')
    return answer;
}