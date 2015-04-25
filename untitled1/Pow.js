/**
 * Created by Руслан on 09.04.2015.
 */
var pow = function(x,n)
{ return Math.pow(x,n);}
pow(3,2);

//if (n = 2) {x =Math.sqrt(x*x*x*x)}
//    else if(n = 3 ) {x =Math.sqrt(x*x*x*x*x*x)}
//    else if (n =4 ) {x =Math.sqrt(x*x*x*x*x*x*x*x)}
//    else  null;

function pow2(x, n) {
    if (n != 1) {
         return x * pow2(x, n - 1);
    } else  return x;
}
pow2(2,5);

