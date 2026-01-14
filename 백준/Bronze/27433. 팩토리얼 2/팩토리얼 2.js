const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(input) {
    const value = input[0]
   if (value <= 0 || value > 20 ) return 1
    
   let answer=1;
    
   for (let i = 2; i <= value; i++) {
       answer *= i
   }
    
    return answer
}

console.log(solution(input));