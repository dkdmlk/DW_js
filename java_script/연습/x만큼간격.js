function solution(x, n) {
    var answer = [];
    var z = x;
    for(var i=0; i<n; ++i){
        answer[i] = z*(i+1);
    }
    return answer;
}

var x = 2;
var n = 5;
