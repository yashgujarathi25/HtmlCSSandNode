exports.add=function(a,b){
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var sum = num1 + num2;
    return sum;
}

exports.subtract=function(a,b){
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var sub = num1 - num2;
    return sub;
}

exports.multiply = function(a,b){
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var mul = num1 * num2;
    return mul;
}

exports.divide = function(a,b){
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var div = num1 / num2;
    return div;
}

exports.square = function(a){
    var num1 = parseInt(a);
    var sqr = num1 * num1;
    return sqr;
}

exports.sum = function(a,b,c){
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var num3 = parseInt(c);
    var sum = num1 + num2 + num3;
    return sum;
}