function solution(numbers, direction) {
    if(direction == 'right') {
        const a = numbers.pop(numbers[numbers.length-1])
        numbers.unshift(a)
    } else {
        const b = numbers.shift(numbers[0])
        numbers.push(b)
    }
    return numbers;
}