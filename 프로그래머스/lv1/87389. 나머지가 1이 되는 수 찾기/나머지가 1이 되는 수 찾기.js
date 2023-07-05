function solution(n) {
    if (3 <= n && n <= 1_000_000) {
        for (let x = 1; x < n; x++) {
            if (n % x === 1) {
                return x;
            }
        }
    }
}