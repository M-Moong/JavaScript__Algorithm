function solution(binomial) {
    const part = binomial.split(' ')
    switch (part[1]) {
        case "+" :
            return +part[0] + +part[2]
            break;
        case "-" :
            return +part[0] - +part[2]
            break;
        case "*" :
            return +part[0] * +part[2]
            break;
        case "/" :
            return +part[0] / +part[2]
            break;
    }
}