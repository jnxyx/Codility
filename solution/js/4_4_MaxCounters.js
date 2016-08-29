// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var arr = [];
    var max = 0;
    var maxflag;
    for (var i = 0; i < N; i++) {
        arr[i] = 0;
    }
    for (i = 0; i <= (A.length - 1); i++) {
        if (A[i] >= 1 && A[i] <= N) {
            if (maxflag && arr[A[i] - 1] < maxflag) {
                arr[A[i] - 1] = maxflag + 1;
            } else {
                arr[A[i] - 1] += 1;
            }
            if (arr[A[i] - 1] > max) {
                max = arr[A[i] - 1];
            }
        } else if (A[i] == (N + 1)) {
            maxflag = max;
        }
    }
    for (i = 0; i < N; i++) {
        if (maxflag && arr[i] < maxflag) {
            arr[i] = maxflag;
        }
    }
    return arr;
}
