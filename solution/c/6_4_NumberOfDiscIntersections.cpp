// you can write to stdout for debugging purposes, e.g.
// printf("this is a debug message\n");

int solution(int A[], int N) {
    // write your code in C99 (gcc 4.8.2)
    if(N<=1){
    	return 0;
    }
    int calulate = 0;
	int max , min , jmax , jmin;
	int i , j;
    for (i = 0; i < (N-1); i++) {
        max = i + A[i];
        min = i - A[i];
        for (j = i + 1; j < N; j++) {
            jmax = j + A[j];
            jmin = j - A[j];
            if ((max >= jmin && max <= jmax)||(jmax >= min && jmax <= max)) {
                calulate++;
            }
        }
    }
    return calulate;
}