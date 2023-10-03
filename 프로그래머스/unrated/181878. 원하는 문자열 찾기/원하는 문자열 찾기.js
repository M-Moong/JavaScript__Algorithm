function solution(myString, pat) {
    const a = myString.toUpperCase();
    const b = pat.toUpperCase();

    return a.includes(b) ? 1 : 0
}