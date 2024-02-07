const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path, "utf8").trim().split(" ");

let count = input[0];

for(let i = 1; i < 10; i++) {
	console.log(`${count} * ${i} = ${count * i}`);
}