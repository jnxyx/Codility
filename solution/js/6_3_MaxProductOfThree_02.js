// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // max three * product
    // A = A.sort(function(a, b) {
    //     return a < b
    // });
    // solution([-3, 1, 2, -2, 5, 6])
    var a, b, c, d, f;
    a = A[0];
    var l = 0;
    for (var i = 0; i < A.length; i++) {
        if (a < A[i]) {
            a = A[i];
            l = i;
        }
    }
    A.splice(l, 1);
    b = A[0];
    l = 0;
    for (var i = 0; i < A.length; i++) {
        if (b < A[i]) {
            b = A[i];
            l = i;
        }
    }
    A.splice(l, 1);
    f = A[0];
    l = 0;
    for (var i = 0; i < A.length; i++) {
        if (f > A[i]) {
            f = A[i];
            l = i;
        }
    }
    A.splice(l, 1);
    if (!A.length) {
        return a * b * f;
    } else {
        c = d = A[0];
        for (var i = 0; i < A.length; i++) {
            if (d > A[i]) {
                d = A[i];
            }
            if (c < A[i]) {
                c = A[i];
            }
        }
    }

    // console.log(a + '/' + b + '/' + c + '/' + d + '/' + f);
    var m = a * b * c;
    var n = a * d * f;
    return m > n ? m : n;
}
