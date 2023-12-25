function solution(intStrs, k, s, l) {
    // intStrs 문자열 배열
    // 원소는 숫자로 이루어져 있습니다.
    
    return intStrs.map(item=> {
        if(item.slice(s,s+l) > k) {
            return +item.slice(s,s+l)
        }
    }).filter(item => item !== undefined);
}