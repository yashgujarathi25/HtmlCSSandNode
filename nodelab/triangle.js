exports.isEquilateral =  function(side1, side2, side3){
    s1 = parseInt(side1);
    s2 = parseInt(side2);
    s3 = parseInt(side3);

    if(s1===s2 && s2===s3){
        return true;
    }else
    {
        return false;
    }
}

exports.calcPerimeter = function(side1, side2, side3){
    s1 = parseInt(side1);
    s2 = parseInt(side2);
    s3 = parseInt(side3);

    var peri = s1 + s2 + s3;
    return peri;
}
