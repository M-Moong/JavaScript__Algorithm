function solution(s){
    
    let low = s.toLowerCase();
    let p = low.match(/p/g) == null ? 0 : low.match(/p/g).length;
    let y = low.match(/y/g) == null ? 0 : low.match(/y/g).length;
  
    
    return (p==y);
}