function solution(price, money, count) {
    // price : 원래 이용료
    // N번째 이용시 가격 : price * count
    // money : 모자라는 가격
    // 금액 안부족하면 : return 0
    
    // price + price*a + price*b + price*c
    
    let a = 0;
    for(let i = 1; i <= count; i++) {
        a += price*i
    }

    return a > money ? (a - money) : 0

}