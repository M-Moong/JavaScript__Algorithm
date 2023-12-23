function solution(num_list) {
    let answer = 0;
    let num = 0;

    for (let i=0; i<num_list.length; i++) {
        // 먼저 num_list 를 돌고

        for (let j=0; j<num_list[i]; j++) {
            // num_list 의 요소를 1이 될 때까지 계산한다

            // 반복문 첫 시작에만 num_list[i] 로 초기화한다
            if (j === 0) num = num_list[i];

            // 1인 경우
            if (num === 1) {
                console.log('===> ', num, j);
                answer += j;

                break;
            }
            // 짝수인 경우
            if (num % 2 === 0) {
                console.log('even ', num, j);
                num = num / 2;
            }
            // 홀수인 경우
            else if (num % 2 === 1) {
                console.log('odd ', num, j);
                num = (num - 1) / 2;
            }
        }
    }

    return answer;
}