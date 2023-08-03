function solution(x) {
    let b = x.toString();
    let a = [ ... b]
    let sum = 0;
    a.forEach(num => {
        sum += +num;
    })

    
    if ( x % sum == 0) {
        return true;
    } else {
        return false    
    }
}