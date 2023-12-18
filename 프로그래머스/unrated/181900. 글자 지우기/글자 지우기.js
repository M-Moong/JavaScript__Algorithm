function solution(my_string, indices) {
    // 문자열 my_string
    // 정수 배열 indices
    
    return [...my_string].filter((item, index)=> !indices.includes(index)).join('')
}