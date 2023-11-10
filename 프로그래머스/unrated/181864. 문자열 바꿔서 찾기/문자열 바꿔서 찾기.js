function solution(myString, pat) {
    const a = [...myString].map((item)=> {
        if(item === "A") {
            return item.replace("A","B")
        } else {
            return item.replace("B","A")
        }
    })
    
    return a.join('').includes(pat) ? 1 : 0
}