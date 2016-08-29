function solution(A) {
    var a = [];
    var result = 0;
    for (var i = A.length - 1; i >= 0; i--) {
        if (!a[A[i]]) {
            result++;
            a[A[i]] = i;
        }
    }
    return result;
}
