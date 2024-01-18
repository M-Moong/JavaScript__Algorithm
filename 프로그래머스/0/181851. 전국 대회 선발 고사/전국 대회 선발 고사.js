function solution(rank, attendance) {
    return [...attendance.reduce((acc, cur, idx) => {
        if (cur) {
            acc.set(idx, rank[idx]);
        }

        return acc;
    }, new Map())]
    .sort((a, b) => a[1] - b[1])
    .reduce((acc, cur, idx) => {
        const [student, rank] = cur;

        if (idx === 0) acc += 10000 * student;
        if (idx === 1) acc += 100 * student;
        if (idx === 2) acc += student;

        return acc;
    }, 0);
}