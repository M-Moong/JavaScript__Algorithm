function solution(my_string) {
    const a = [...my_string].filter((item)=>{
        return +item == item
    }).sort((a,b)=>a-b).map(item=>(+item))
    
    return a
}