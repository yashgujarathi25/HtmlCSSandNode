const http = require("http");
const fs = require("fs");
const url = require("url");
var m2 = require("./mymodule");

server =  http.createServer(function(req,resp){
    var q = url.parse(req.url,true);
    resp.writeHeader(200,{'content-type':'text/html'});
    switch (q.pathname) {
        case "/home":
            rs=fs.createReadStream("./public/nodeques2.html");
            rs.pipe(resp);
            break;
        case "/calculation":
            if(q.query.num <= 5){
                var f = m2.factorial(q.query.num)
                resp.write("<h2>Factorial of "+q.query.num+" is "+f);
                resp.end();
            }
            else if(q.query.num > 5  && q.query.num < 10){
                var t = m2.printtable(q.query.num);
                resp.write(t)
                resp.end();
            }
            else{
                var p = m2.primeNum(q.query.num);
                if(p===true){
                    resp.write("Number is Prime");
                    resp.end();
                }else
                {
                    resp.write("Number is not Prime ");
                    resp.end();
                }
            }
            break;
    
    }
});
server.listen(3000);
console.log("Server is running on port 3000");