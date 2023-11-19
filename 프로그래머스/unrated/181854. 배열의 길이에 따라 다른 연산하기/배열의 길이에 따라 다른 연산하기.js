function solution(arr, n) {
    if (arr.length % 2 !== 0) {
        return arr.map((item,index)=> {
            if (index % 2 === 0 ) {
                return item + n
            } else {
                return item
            }
        })
    } else {
        return arr.map((item, index) => {
            if (index % 2 !== 0) {
                return item + n
            } else {
                return item
            }
        })
    }
}