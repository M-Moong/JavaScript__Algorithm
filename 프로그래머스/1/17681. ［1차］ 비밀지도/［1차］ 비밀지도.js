function solution(n, arr1, arr2) {  
    
    // 설명 //
    // 1. 지도 한 변의 길이: n
    // 2. 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류
    // 3. 지도1 과 지도2를 겹친 결과물을 얻을수 있다.
    // 4. 둘중에 하나라도 벽이면 => 벽
    // 5. 둘다 공백이면 => 공백
    // 6. 지도1과 지도2는 각각 정수 배열로 암호화!
    // 7. 가로줄에서 벽 부분 : 1 / 공백 부분 : 0
    
    const answer = arr1.map((arr1Binary,binaryIdx)=>{
        const binaryResult = (arr1Binary | arr2[binaryIdx]).toString(2)
        
        console.log(binaryResult)
        const rows = ' '.repeat(n-binaryResult.length)
                        .concat(binaryResult)
                        .replace(/1/gi,'#')
                        .replace(/0/gi,' ')
        return rows
    })

    return answer
}