// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    // disintersections number
    if (!A.length || A.length == 1) {
        return 0;
    }
    var calulate = 0;
    var max, min;
    var jmax, jmin;
    var i, j;
    for (i = 0; i < (A.length-1); i++) {
        max = i + A[i];
        min = i - A[i];
        for (j = i + 1; j < A.length; j++) {
            jmax = j + A[j];
            jmin = j - A[j];
            if ((max >= jmin && max <= jmax)||(jmax >= min && jmax <= max)) {
                calulate++;
            }
        }
    }
    return calulate;
}
