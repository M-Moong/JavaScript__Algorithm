function solution(num_list) {
    
    let a = 0;
    let b = 0;
    
    num_list.map((item, index)=> {
        if (index % 2 === 0) {
            return a += item 
        } else if ( index % 2 !== 0) {
            return b += item
        }
    })
    
    return Math.max(a,b)
}