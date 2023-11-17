function solution(my_string) {
    return my_string.replace(/\s\s+/g, " ").trim().split(' ')
}