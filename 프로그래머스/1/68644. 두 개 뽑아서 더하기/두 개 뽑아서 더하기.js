function solution(numbers) {
    let answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 1; j < numbers.length; j++) {
            if(i !== j) {
                answer.push(numbers[i] + numbers[j])    
            }
            
        }
    }
    
    const set = new Set(answer);
    const uniqueArr = [...set].sort((a,b)=>a-b);

    return uniqueArr
}