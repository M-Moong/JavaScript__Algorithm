function solution(s) {
    let a = s.split('').map((item)=>item.charCodeAt()).sort((a,b)=>b-a).map((item)=>String.fromCharCode(item)).join('')
    return a
}