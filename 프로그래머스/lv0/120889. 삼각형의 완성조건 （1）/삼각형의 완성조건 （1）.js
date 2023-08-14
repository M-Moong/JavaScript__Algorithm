function solution(sides) {
    // 가장 긴변 : 다른 두변의 합보다 작다.
    // 만들수 있으면 1 : anotherSum > max
    // 만들수 없다면 2 : anotherSum < max
    // 정삼각형 : anotherSum/2 === max
    // sides = [1,2,3]
    let sort = sides.sort((a,b)=>b-a);
    let max = sort[0];
    sort.shift(max);
    let sum = sort.reduce((acc, cur)=> acc + cur, 0)
    
    return max >= sum ? max === sum/2 ? 1 : 2 : 1;
    
}