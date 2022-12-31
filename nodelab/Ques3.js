const http = require("http");
const url = require("url");
var fs = require("fs");
var m3 = require("./circle");
var m4 = require("./rectange");
var m5= require("./triangle");
server = http.createServer(function(req,resp){
    var q = url.parse(req.url,true);
    resp.writeHeader(200,{'content-type':'text/html'});
    switch(q.pathname){
        case "/home":
            rs = fs.createReadStream("./public/nodeques3Home.html");
            rs.pipe(resp);
            break;
        case "/shape":
            switch (q.query.shape) {
                case "circle":
                    rs1 = fs.createReadStream("./public/nodeques3Circle.html");
                    rs1.pipe(resp);
                    break;
                case "rectangle":
                    rs2 = fs.createReadStream("./public/nodeques3Rect.html");
                    rs2.pipe(resp);
                    break;
                case "triangle":
                    rs3 = fs.createReadStream("./public/nodeques3Triangle.html");
                    rs3.pipe(resp);
                    break;
            }
            break;
        case "/circleCal":
            var area = m3.calcArea(q.query.rad);
            var cir = m3.calcCircumference(q.query.rad);
            var dia = m3.calcDiameter(q.query.rad);
            resp.write("<h3> Circle --> Area : "+area+" Circumference : "+cir+" Diameter : "+dia+"</h3>");
            resp.end();
            break;
        case "/rectCal":
            var arear = m4.calcArea(q.query.len,q.query.brd);
            var peri = m4.calcPerimeter(q.query.len,q.query.brd);
            resp.write("<h3> Rectangle --> Area : "+arear+" Perimeter : "+peri+"</h3>");
            resp.end();
            break;
        case "/triCal":
            var equal = m5.isEquilateral(q.query.s1,q.query.s2,q.query.s3);
            var peri = m5.calcPerimeter(q.query.s1,q.query.s2,q.query.s3);
            resp.write("<h3> Triangle --> Equilateral : "+equal+" Perimeter : "+peri+"</h3>");
            resp.end();
            break;
    }
});
server.listen(3000);
console.log("Server is running at port 3000");