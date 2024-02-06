const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path, "utf8").trim().split(" ");

const sort = input.sort((a, b) => b - a);


let a = sort[0];
let b = sort[1];
let c = sort[2];


if(a === b && b === c) {
	console.log(10000 + a * 1000);
} else if(a === b || b === c || c === a) {
	console.log(1000 + b * 100);
} else {
	console.log(a * 100);
}