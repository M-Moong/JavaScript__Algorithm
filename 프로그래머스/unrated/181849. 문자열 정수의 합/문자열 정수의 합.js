function solution(num_str) {
    let a = [...num_str]
    return a.reduce((a,b)=>{
       return a + +b 
    },0)
}