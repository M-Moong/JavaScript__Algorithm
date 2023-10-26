// function solution(n, control) {
//     return [...control].reduce((acc, item)=>{
//         if(item === 'w') {
//             return acc + 1
//         } else if (item === 's') {
//             return acc - 1
//         } else if (item === 'a') {
//             return acc + 10
//         } else if (item === 'd') {
//             return acc - 10
//         } else {
//             return acc
//         }
//     },n)
// }

function solution(n, control) { 
    return [...control].reduce((acc, cur) => { 
        switch(cur) { 
            case 'w': return acc+1 
            case 's': return acc-1 
            case 'd': return acc+10 
            case 'a': return acc-10 
            default: return acc 
        } 
    }, n) 
}
