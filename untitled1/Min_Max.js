var arr = new Array( 1, 3, 7, 13, 9, 8);
function getMin(arr){
   var minimum = arr[0];           //////!
        for (var i = 0; i < arr.length; i++) {
            if (minimum > arr[i]) {
                minimum = arr[i];
            }
        } return minimum;
}

function getMax(arr){
    var maximum = arr[0];
        for (var i = 0; i<arr.length;i++){
            if(maximum < arr[i]){
               maximum = arr[i];
            }
        } return maximum
}

//var min = getMin(arr);
//var max = getMax(arr);
//document.write('Min: ' + min);
//document.write('Max: ' + max);

var array = new Array( 1, 3, 7, 13, 9, 8);
function max( arr ){
    return Math.max.apply( Math, arr );
}

function min( arr ){
    return Math.min.apply( Math, arr );
}

min(arr)
max(arr)