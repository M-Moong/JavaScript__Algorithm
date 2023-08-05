function solution(arr, divisor) {
    const a = arr.filter((item) => {
        if (item % divisor === 0) {
            return true;    
        } else {
            return false;
        }
    })

    if (a.length === 0) {
        a.push(-1);
    }
     
    const b = a.sort((a,b)=>{
        return a - b;
    })

    return b;
}