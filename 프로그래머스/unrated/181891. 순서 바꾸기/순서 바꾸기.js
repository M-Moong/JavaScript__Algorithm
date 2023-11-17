function solution(num_list, n) {
    
    const a = num_list.splice(n)
    
    return [...a,...num_list]
    
}