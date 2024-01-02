function solution(q, r, code) {
    // 두 정수 q, r
    // 문자열 code
    
    const arr = [...code]
    
    return arr.map((item, idx) => {
        if (idx % q === r) {
            
            return item
        }
    }).filter(item=>item).join('')
}