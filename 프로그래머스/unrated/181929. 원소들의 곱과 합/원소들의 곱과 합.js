function solution(num_list) {
    const total = num_list.reduce((acc, cur) => acc + cur ,0)
    const sum = total**2
    
    
    const multiply = num_list.reduce((acc, cur) => acc * cur , 1)
    
    return multiply < sum ? 1 : 0
    
}