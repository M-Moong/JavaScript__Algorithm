let [a, b] = require('fs')
.readFileSync('/dev/stdin').
toString().
split(' ');

console.log(+a === +b ? '==' : +a > +b ? '>' : '<');