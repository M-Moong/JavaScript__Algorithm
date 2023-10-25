function solution(num_list, n) {
    return num_list.filter((_,index)=>{
        return index % n === 0
    })
}