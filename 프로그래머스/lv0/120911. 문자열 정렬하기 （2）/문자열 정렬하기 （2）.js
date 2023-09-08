function solution(my_string) {
    const array = my_string.split('')
    return array.map(item=>{
        if(item == item.toUpperCase()) {
            return item = item.toLowerCase()
        }
        return item
    }).sort().join("")
}