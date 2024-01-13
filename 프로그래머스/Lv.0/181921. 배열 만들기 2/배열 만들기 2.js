function solution(l, r) {
    let answer = [];

    // i를 r만큼 반복 (r 이하 조건 값이므로 r 은 최대 값)
    for (let i=l; i<r+1; i++) {
        // i가 5의 배수가 아니면 continue (5로 나누었을 때 0이면 5의 배수이기 때문에)
        // 5와 0이 들어간 정수는 결국 5의 배수이기 때문
        if (i % 5 !== 0) {
            continue;
        }

        // Array.every(element => return conditional)
        // 1) i는 정수 값이므로 문자형으로 타입 캐스팅 해준다
        // 2) 문자형 i에 Array Spread 연산자를 쓰면 split() 함수처럼 하나의 문자 단위로 쪼갤 수 있다
        // 예)
        // 정수 i = 500 -> 문자 i = '500'
        // [...i.toString()] = [...'500']
        // = ['5', '0', '0']
        if (![...i.toString()].every((element) => element === '5' || element == '0')) continue;

        answer.push(i);
    }

    return answer.length ? answer : answer = [-1];
}