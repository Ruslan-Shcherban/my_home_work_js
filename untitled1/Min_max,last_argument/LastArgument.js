/**
 * Created by Руслан on 08.04.2015.
 */
var arr = [1,22,32,53,function (){arr = null; console.log('Function competed');}];
//var a = new Array(arr);
function last(arr){
    var popped = arr.pop();

if(typeof popped == "function" ){   ///////typeof возвращает стринг
}
    return popped;  }

last(arr);

