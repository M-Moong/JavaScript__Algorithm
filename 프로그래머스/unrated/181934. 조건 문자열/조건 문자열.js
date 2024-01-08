function solution(ineq, eq, n, m) {
    const condition = ineq + eq
    
    if ( condition === '<=') {
        return n <= m ? 1 : 0
    } else if ( condition === '>=') {
        return n >= m ? 1 : 0
    } else if ( condition === '<!') {
        return n < m ? 1 : 0
    } else if ( condition === '>!') {
        return n > m ? 1 : 0
    }
}