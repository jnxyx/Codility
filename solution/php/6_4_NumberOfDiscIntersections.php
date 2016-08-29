// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";
// <?php
function solution($A) {
    // write your code in PHP5.5
    $length = count($A);
    if( $length == 0 || $length==1 ){
    	return 0;
    }
    $calulate = 0;
    for ($i = 0; $i < ($length-1); $i++) {
        $max = $i + $A[$i];
        $min = $i - $A[$i];
        for ($j = $i + 1; $j < $length; $j++) {
            $jmax = $j + $A[$j];
            $jmin = $j - $A[$j];
            if (($max >= $jmin && $max <= $jmax)||($jmax >= $min && $jmax <= $max)) {
                $calulate++;
            }
        }
    }
    return $calulate;
}