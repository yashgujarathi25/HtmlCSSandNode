exports.calcArea =  function(length, breadth){
    var l = parseInt(length);
    var b = parseInt(breadth);
    var area = l*b;
    return area;
}

exports.calcPerimeter =  function (length, breadth){
    var l = parseInt(length);
    var b = parseInt(breadth);
    var peri = 2*(l+b);
    return peri;
}