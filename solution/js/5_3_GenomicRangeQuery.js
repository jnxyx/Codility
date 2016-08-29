// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 4.0.0)
    // ACGT = 1234
    // 
    var m = P.length > Q.length ? Q.length : P.length;
    var substr;
    var arr = [];
    for (var i = 0; i < m; i++) {
        substr = P[i] < Q[i] ? S.substring(P[i], Q[i] + 1) : S.substring(Q[i], P[i] + 1);
        if (substr.indexOf('A') != -1) {
            arr[i] = 1;
        } else if (substr.indexOf('C') != -1) {
            arr[i] = 2;
        } else if (substr.indexOf('G') != -1) {
            arr[i] = 3;
        } else {
            arr[i] = 4;
        }
    }
    return arr;
}
