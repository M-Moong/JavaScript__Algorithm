function solution(clothes) {
    // 코니는 매일 다른 옷 조합을 좋아한다.
    
    const typeCount = {};

for (const [item, type] of clothes) {
  if (typeCount[type]) {
    typeCount[type] += 1;
  } else {
    typeCount[type] = 1;
  }
}
    
    console.log(typeCount)
    
    let answer = 1;

for (const type in typeCount) {
    
  answer *= (typeCount[type] + 1);
}

answer -= 1; // 아무것도 안 입는 경우 제외
    
    return answer

    
    
}