var http = require('http');
var url =  require('url');
var fs  = require('fs');


host="localhost";
port=200;

server =http.createServer(function(req,res){

    if(err){
        res.writeHead(404,{"Content-Type" :"text/html"});
        return res.end("404 Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end();
    

});
server.listen(port,host,function(){
    console.log(`Server running at http://${host}:${port}/`);
  });