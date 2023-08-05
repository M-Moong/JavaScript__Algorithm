function solution(phone_number) {
    let bin = '';
    
    const a = phone_number.split('')
    for(let i = 0; i< a.length - 4; i++) {
        bin += a[i].replace(/\w/g,'*')
    }
    
    let answer = bin + phone_number.slice(-4)

    return answer;
}