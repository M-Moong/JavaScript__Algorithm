function solution(participant, completion) {
    // participant - 마라톤에 참여한 선수들의 이름 배열
    // completion - 완주한 선수들의 이름 배열

    // 중복은 해결 못한 코드
    // return participant.filter((runner) => {
    //       return !completion.includes(runner)
    // }).join('')
    
    const runMap = new Map()
    
    participant.map((runner) => {
        if(!runMap.get(runner)) {
            runMap.set(runner, 1)
        } else {
            runMap.set(runner, runMap.get(runner) + 1)
        }
    })
    
    completion.map((finisher) => {
        if(runMap.get(finisher)) {
            runMap.set(finisher,runMap.get(finisher) -1)
        } 
    })
    
    let array = []
    
    for (const key of runMap.keys()) {
        if(runMap.get(key) > 0) {
            array.push(key)
        }
    } 
    
    return array.join('')
    
}