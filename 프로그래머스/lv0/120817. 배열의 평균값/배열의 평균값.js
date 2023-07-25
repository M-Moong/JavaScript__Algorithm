function solution(numbers) {
    
    const a = numbers.reduce((acc,cur)=>{
       return acc += cur 
    },0) / numbers.length
    return a
}