const fs = require("fs");
const path = process.platform === "linux" ? 0 : "./input.txt";

const input = fs.readFileSync(path, "utf8").toString().trim().split("\n");

if(input[0] > 0) {
	if(input[1] > 0) {
		console.log('1');
	} else {
		console.log('4');
	}
} else {
	if(input[1] < 0) {
		console.log('3');
	} else {
		console.log('2');
	}
}

