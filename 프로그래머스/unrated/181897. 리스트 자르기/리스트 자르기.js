function solution(n, slicer, num_list) {
    // 정수 n
    // 정수 리스트 3개 slicer a, b, c
    // 정수 여러개가 담긴 리스트 num_list
    
    const [a, b, c] = slicer
    
    if ( n === 1) {
        return num_list.slice(0,b+1)
    } else if ( n === 2) {
        return num_list.slice(a, num_list.length+1)
    } else if ( n === 3) {
        return num_list.slice(a, b+1)
    } else if ( n === 4) {
        return num_list.slice(a, b+1).filter((_,idx) => idx % 2 === 0)
    }
}