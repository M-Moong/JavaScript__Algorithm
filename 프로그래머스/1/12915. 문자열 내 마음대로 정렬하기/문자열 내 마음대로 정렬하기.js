function solution(strings, n) {
    strings.sort((a,b)=>{
        // n번째 기준 정렬
        if(a[n] !== b[n]){
            return a[n] > b[n] ? 1 : -1
        }
        // string 기준 정렬 
        return a > b ? 1 : -1
    })
    return strings
}