const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path, "utf8").trim().split(" ");

const count = input[0];

let answer = 0;

for(let i = 1; i <= count; i++) {
	answer += i;
}

console.log(answer);