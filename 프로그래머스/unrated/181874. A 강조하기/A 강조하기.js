function solution(myString) {
    const a = [...myString.toLowerCase()]
    const b = a.map((item)=> {
        if(item === 'a') {
            return item.toUpperCase()
        } else {
            return item
        }
    })
    return b.join('')
}