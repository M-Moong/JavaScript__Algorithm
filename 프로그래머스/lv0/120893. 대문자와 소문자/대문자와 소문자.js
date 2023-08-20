function solution(my_string) {
    const a = my_string.split('')
    return a.map((item)=>{
        if(item === item.toUpperCase()) {
            return item.toLowerCase()
        } else {
            return item.toUpperCase()
        }
    }).join('')
}