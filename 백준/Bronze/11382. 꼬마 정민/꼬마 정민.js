const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path, "utf8").trim().split(" ");

const answer = input.reduce((acc, cur) => {
    return acc + +cur;
}, 0);

console.log(answer);
