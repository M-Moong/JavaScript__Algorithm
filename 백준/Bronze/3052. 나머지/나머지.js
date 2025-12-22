const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(input) {
    const arr = input.map((item) => item % 42)
    
    const set = new Set()
    
    for (const value of arr) {
        set.add(value)
    }
    
    return set.size
}

console.log(solution(input));
