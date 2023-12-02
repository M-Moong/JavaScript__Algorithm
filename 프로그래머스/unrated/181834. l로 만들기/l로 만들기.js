function solution(myString) {
    return [...myString].map(item=>{
        if (item < 'l') {
            return 'l'
        } 
        return item
    }).join('')
}