function solution(my_string, alp) {
    const a = [...my_string]
    const b = a.map(item=>{
        if(item === alp) {
            return item.toUpperCase()
        } else {
            return item
        }
    })
    return b.join('')
}