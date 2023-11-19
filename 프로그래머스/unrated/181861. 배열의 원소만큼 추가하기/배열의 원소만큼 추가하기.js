function solution(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            a.push(arr[i])
        }
    }
    
    return a
}