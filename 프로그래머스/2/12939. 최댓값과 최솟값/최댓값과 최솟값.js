function solution(s) {
    const array = s.split(' ').map(item => Number(item));
    
    const maxNumber = Math.max(...array)
    const minNumber = Math.min(...array)
  
    return `${minNumber} ${maxNumber}`
}