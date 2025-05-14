function solution(participant, completion) {
    // participant - 마라톤에 참여한 선수들의 이름 배열
    // completion - 완주한 선수들의 이름 배열

    // 중복은 해결 못한 코드
    // return participant.filter((runner) => {
    //       return !completion.includes(runner)
    // }).join('')
    
//     const runMap = new Map()
    
//     participant.map((runner) => {
//         if(!runMap.get(runner)) {
//             runMap.set(runner, 1)
//         } else {
//             runMap.set(runner, runMap.get(runner) + 1)
//         }
//     })
    
//     completion.map((finisher) => {
//         if(runMap.get(finisher)) {
//             runMap.set(finisher,runMap.get(finisher) -1)
//         } 
//     })
    
//     let array = []
    
//     for (const key of runMap.keys()) {
//         if(runMap.get(key) > 0) {
//             array.push(key)
//         }
//     } 
    
//     return array.join('')

////////////////////////////////////////////////////////////////////////////    
    
    const runMap = new Map();

    // 1. 참가자 명단 돌면서 이름 개수 세기
    participant.forEach(runner => {
        runMap.set(runner, (runMap.get(runner) || 0) + 1);
    });

    // 2. 완주자 명단 돌면서 이름 개수 빼기
    completion.forEach(finisher => {
        runMap.set(finisher, runMap.get(finisher) - 1);
    });

    // 3. Map 순회하며 개수가 0이 아닌 선수 찾아서 바로 반환
    for (const [runner, count] of runMap.entries()) {
        if (count > 0) { 
            return runner; 
        }
    }

    return '';
}