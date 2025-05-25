function solution(clothes) {    
    const typeCount = {};

    for (const [item, type] of clothes) {
      if (typeCount[type]) {
        typeCount[type] += 1;
      } else {
        typeCount[type] = 1;
      }
    }
    
    let answer = 1;

    for (const type in typeCount) {
      answer *= (typeCount[type] + 1);
    }
    
    return answer - 1; // 아무것도 안 입는 경우 제외
}