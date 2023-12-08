function solution(my_string, m, c) {
    return [...my_string].map((item,idx)=> {
        if(idx % m === c-1) {
            return item
        }
    }).filter(item=>item).join('')
}