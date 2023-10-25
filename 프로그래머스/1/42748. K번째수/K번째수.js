function solution(array, commands) {
    // i번째부터 j번째까지 자르고, 정렬한다.
    // k번째 있는 수를 구한다.
    // [[2,5,3],[4,4,1],[1,7,3]]
    
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {   
        let key = commands[i][2]-1;
        
        answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b)[key])
    }
    
    return answer;
}