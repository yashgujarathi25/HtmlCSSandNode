exports.calcArea = function(radius){
    var r = parseInt(radius);
    var area = 3.14*r*r;
    return area;
}

exports.calcCircumference = function(radius){
    var r = parseInt(radius);
    var cir = 2 * 3.14 * r;
    return cir;
}

exports.calcDiameter = function(radius){
    var r = parseInt(radius);
    var d = 2*r;
    return d;
}