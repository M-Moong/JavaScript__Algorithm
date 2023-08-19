function solution(array, height) {
    return array.filter((item)=>{
        return item > height
    }).length
}