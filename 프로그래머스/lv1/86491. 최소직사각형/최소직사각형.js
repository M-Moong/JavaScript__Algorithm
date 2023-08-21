function solution(sizes) {
    let answer = 0;
    // 2차원을 정렬
    for (let arr of sizes) {
        arr.sort((a, b) => b - a);;
    }
    
    // 2차원을 1차원으로 2개의 배열로 담기
    let front = [], back = [];
    sizes.forEach(i => {
        front.push(i[0]);
        back.push(i[1]);
    });

    // 각각의 1차원 배열 정렬
    front.sort((a,b) => b - a);
    back.sort((a,b) => b - a);

    // 각 1차원 배열에서 가장 높은값의 곱
    answer = front[0] * back[0];

    return answer;
}