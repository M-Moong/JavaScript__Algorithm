function solution(arr, flag) {
    // 빈 배열 X
    // 길이가 같은 
    // 정수 배열 arr 
    // boolean 배열 flag
    
    let answer = [];
    
    arr.map((item, index)=> {
        if(flag[index]) {
            for(let i = 0; i < item*2; i++) {
                answer.push(item) 
            }
        } else {
            for (let i = 0 ; i< item; i++) {
                answer.pop() * item    
            }
        }
    })
    
    return answer
    
    
    
    
//     let answer = [];
    
//     for (let i = 0; i < arr.length; i++) {
        
//         if (flag[i]) {
//             console.log(i)
//             let j = 0;
//             while(j < arr[i]*2) {
//                 answer.push(arr[i])
//                 j++
//             }
//         } else {
//             console.log(i)
//             let j = 0;
//             while(j < arr[i]) {
//                 answer.pop();
//             }
//         }
//     }
    
//     return answer;
}