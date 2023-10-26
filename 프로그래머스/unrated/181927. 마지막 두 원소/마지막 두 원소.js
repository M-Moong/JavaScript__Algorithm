function solution(num_list) {
    const a = num_list.slice(num_list.length-1)
    const b = num_list.slice(num_list.length-2,num_list.length-1)
    
    if ( a > b) {
        num_list.push(a-b)    
        return num_list;
    } else {
        num_list.push(a*2)
        return num_list;
    }
}