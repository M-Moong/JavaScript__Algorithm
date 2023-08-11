function solution(s) {
    let a = [...s]
    let b = a.filter(item=> !isNaN(item))
    
    if (a.length !== 4 && a.length !== 6) {
        return false;
    }
    
    return (a.length !== b.length) ? false : true
}