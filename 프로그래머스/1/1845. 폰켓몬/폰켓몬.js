function solution(nums) {
    // 폰켓몬 잡기위해 연구실 도착했다.
    // 연구실에 있는 N마리 폰켓몬중 N/2마리를 가져가도 좋다.
    // 폰켓몬 종류에 따라 번호를 붙인다.
    // 같은 종류의 폰켓몬은 같은 번호를 가진다.
    
    // 예시 폰켓몬 : 4마리
    // [3번, 1번, 2번, 3번]
    // 31,32,33,12,13,23
    
    const maxCount = Math.floor(nums.length / 2)
    const unique = new Set(nums).size
    
    return unique < maxCount ? unique : maxCount
    

}