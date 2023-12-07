function solution(number) {
    const a = [...number].reduce((acc, cur) => acc + +cur, 0)

    return a % 9
}