/**
 * Created by Руслан on 11.04.2015.
 */
var Str = function(string) {

    this.charAt = function (n1) {
        var s = string;
        var a = s[n1];
        return a;
    };

    this.concat = function (string) {
        var a = s;
        a = a + string;
        return a
    }
    concat('any')                //    'some stringany'

    this.concat = function (string, Number) {
        var a = s;
        a = a + string + Number;
        return a
    }
    concat('any', 123)                //    'some stringany123'


    this.concat = function (string, Number, Array) {
        var a = this.s;
        var b = string;
        var c = Number;
        var arr = (function (Array) {
            var result = [1, 2, 3];
            return result
        })()
        a = a + b + c + arr;
        return a
    }
    concat()       //    'some stringany1231,2,3'


    this.concat = function (string, Number, Array, Function) {
        var a = s;
        var b = string;
        var c = Number;
        var func = function () {
        };
        var arr = (function (Array) {
            var result = [1, 2, 3];
            return result
        })()
        a = a + b + c + arr + func;
        return a
    }
    concat('any', 123, [1, 2, 3], function () {
    })     //  "some stringany1231,2,3function (){}"


    this.slice = function (Number) {
        var a = s;
        Number = '';
        a = Number + a;
        return a
    }
    slice(2);


} ;
var s = new Str('some string');