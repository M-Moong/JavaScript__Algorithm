function solution(arr, intervals) {
    const answer =  intervals.map(item=> {
        return arr.slice(item[0],item[1]+1)
    })
    
    return [...answer[0], ...answer[1]]
}