exports.factorial = function(a){
    var num1 = parseInt(a);
    var fact=1;
    for(i=1; i<=num1; i++)
    {
        fact = fact*i;
    }
    return fact;
}

exports.printtable = function(a){
    var str ="";
    var num1 = parseInt(a);
    for(i=1; i<=10; i++)
    {
        var res = num1*i;
        str += num1+" * "+i+" = "+res+"<br>";
    }
    return str;    
}

exports.primeNum = function(a){
    var num = parseInt(a);
    for(i=0;i<(num/2);i++)
    {
        if(i%2==0){
            return false;
        }
        else{
            return true;
        }
    }
}