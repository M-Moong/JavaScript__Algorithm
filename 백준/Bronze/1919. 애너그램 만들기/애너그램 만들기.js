const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(input) {
  const values1 = input[0];
  const values2 = input[1];
    
  const map = new Map();
    
  for(const item of values1) {
      map.set(item, (map.get(item) || 0) + 1)
  }
    
  for(const item of values2) {
      map.set(item, (map.get(item) || 0) - 1)
  }
    
  let answer = 0;  
  for (const value of map.values()) {
      answer += Math.abs(value)
  }
  return answer;
}

solution(input);

console.log(solution(input))
