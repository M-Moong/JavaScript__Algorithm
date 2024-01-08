 function solution(arr) {
    // 0과 1로만 이루어진 정수 배열 arr
    // 새로운 배열 stk를 만들고자 한다.
    // i의 초기값을 0으로 설정하고
    // i가 arr의 길이보다 작으면 다음을 반복한다.
     
    const answer =  arr.reduce((acc, cur, idx) => {
        if (idx < arr.length) {
            if (!acc.length) {
                acc.push(arr[idx]);
            }
            else if (acc.length) {
                if (acc[acc.length - 1] === arr[idx]) {
                    acc.pop();
                }
                else if (acc[acc.length - 1] !== arr[idx]) {
                    acc.push(arr[idx]);
                }
            }
        }

        return acc;
    }, []);

    return answer.length ? answer : [-1];
}

