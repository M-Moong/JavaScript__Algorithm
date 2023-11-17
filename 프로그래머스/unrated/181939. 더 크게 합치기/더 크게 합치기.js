function solution(a, b) {
    const aa = a + "" + b
    const bb = b + "" + a
    return aa > bb ? +aa : +bb
}