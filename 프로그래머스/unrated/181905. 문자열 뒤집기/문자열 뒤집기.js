function solution(my_string, s, e) {
    
    const middle = [...my_string].slice(s,e+1).reverse()
    
    const last = [...my_string].slice(e+1)
    
    const first = [...my_string].slice(0,s)
    
    return [...first, ...middle, ...last].join('')
}