function solution(n, numlist) {
    const a = numlist.filter((item)=>{
        if(item % n === 0) {
            return item
        }
    })
    return a;
}