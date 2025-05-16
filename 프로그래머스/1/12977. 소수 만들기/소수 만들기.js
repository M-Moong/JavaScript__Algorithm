function solution(nums) {
    let plusedNumberArray = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];

                plusedNumberArray.push(sum)

            }
        }
    }
    
    let primeNumberArray = [];
    
    // 자연수 2부터 자신의 숫자 전까지 나머지가 0이 나오는 숫자 확인 
    plusedNumberArray.forEach(item => {
        let divisor = 0;
        
        for (i = 2; i < item; i++){
            
            if(item % i === 0) {
                
                divisor += 1
            }
        }
        
        if(divisor === 0) primeNumberArray.push(item)
    })
    
    return primeNumberArray.length
}