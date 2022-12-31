const http = require("http");
const fs = require("fs");
const url = require("url");
var mc1 = require("./moduleCalc");

server = http.createServer(function(req,resp){
    var q = url.parse(req.url,true);
    resp.writeHeader(200,{'content-type':'text/html'});
    switch(q.pathname){
        case "/":
            resp.write("<h1>this '/' page </h1>");
            resp.end();
            break;
        case "/home":
            rs = fs.createReadStream("./public/nodeques1.html");
            rs.pipe(resp);
            break;
        case "/calc":
            console.log(q.query.opr);
            switch (q.query.opr) {
                case "+":
                    var num1 = q.query.num1;
                    var num2 = q.query.num2;
                    var result = mc1.add(num1,num2);
                    resp.write("<h1>Addition is : "+result+"</h1>");
                    resp.end();
                    break;
                case "-":
                    var num1 = q.query.num1;
                    var num2 = q.query.num2;
                    var result = mc1.subtract(num1,num2);
                    resp.write("<h1>Subtraction is : "+result+"</h1>");
                    resp.end();
                    break;
                    
                case "*":
                    var num1 = q.query.num1;
                    var num2 = q.query.num2;
                    var result = mc1.multiply(num1,num2);
                    resp.write("<h1>Multiplication is : "+result+"</h1>");
                    resp.end();
                    break;
                
                case "/":
                    var num1 = q.query.num1;
                    var num2 = q.query.num2;
                    var result = mc1.divide(num1,num2);
                    resp.write("<h1>Division is : "+result+"</h1>");
                    resp.end();
                    break;

                case "^":
                    var num1 = q.query.num1;
                    var result = mc1.square(num1);
                    resp.write("<h1>Square is : "+result+"</h1>");
                    resp.end();
                    break;

                case "++":
                    var num1 = q.query.num1;
                    var num2 = q.query.num2;
                    var num3 = q.query.num3;
                    var result = mc1.sum(num1,num2,num3);
                    resp.write("<h1>Sum is : "+result+"</h1>");
                    resp.end();
                    break;  
            }
            break;
    }
});
server.listen(3000);
console.log("server running at port 3000");