function solution(rsp) {
    // 가위 2
    // 바위 0
    // 보 5
    const a = rsp.split('')
    return a.map((item)=>{
        if(+item===2){
            return 0
        } else if (+item===0){
            return 5
        } else {
            return 2
        }
    }).join('')
}