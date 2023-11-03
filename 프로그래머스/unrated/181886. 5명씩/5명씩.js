function solution(names) {
    return names.filter((item,index)=>{
        if(index%5===0) {
            return item
        }
    })
}