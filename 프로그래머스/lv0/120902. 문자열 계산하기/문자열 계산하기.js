// function solution(my_string) {
//     let answer = [...my_string]
//     let plus = answer.indexOf("+")
//     let front = answer.slice(0,plus)
//     let back = answer.slice(plus+1)

//     console.log(answer.indexOf("-"))
//     console.log(plus)
//     console.log(front.join(''))
//     console.log(back.join(''))
    
//     if (answer.indexOf('+') > 0) {
//         return +front.join('') + +back.join('')
//     } else if (answer.indexOf('-') > 0) {
//         return +front.join('') - +back.join('')
//     }
// }


function solution(my_string) {
    let arr = my_string.split(' ')
    let cal = +arr[0];
    for(let i = 1; i< arr.length; i++){
        if(arr[i] === '+')
            cal += +arr[i+1];
        else if(arr[i] === '-')
            cal -= +arr[i+1];
        else
            continue;
    }
    return cal;
}

