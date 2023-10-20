function solution(num_list) {
    let answer1 = "";
    let answer2 = "";
    num_list.map((item)=> {
        if (item % 2 === 0) {
            answer1 += item
        } else {
            answer2 += item
        }
    })
    
    return +answer1 + +answer2; 
}