function solution(a, b) {
    const string = '' + a + b
    const multiply = 2*a*b
    
    return +string >= multiply ? +string : multiply
    
}