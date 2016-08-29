// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // max three * product
    if (A.length < 3) {
        return false;
    }
    if (A.length == 3) {
        return A[0] * A[1] * A[2];
    }
    A.sort(function(a, b) {
        return b - a;
    });
    var m = A[0] * A[1] * A[2];
    var n = A[0] * A[A.length - 1] * A[A.length - 2];
    return m > n ? m : n;
}
