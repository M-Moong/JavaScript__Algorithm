function solution(k, score) {
    const scoreSet = []
    return score.map((s,idx)=>{
        // 값을 넣고 내림차순 정렬
        scoreSet.push(s)
        scoreSet.sort((a,b)=>b-a)
        // k보다 넘쳤을 때 순위가 낮은 점수 제외
        if(scoreSet.length > k){
            scoreSet.pop()
        }
        return scoreSet[scoreSet.length-1]
    })
}