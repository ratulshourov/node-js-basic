var http = require('http');
var fs = require('fs');
var server=http.createServer(function (req, res) {
    fs.readFile('index.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
       return res.end('Read the files!');
    }) ;
});

console.log('server running')
server.listen(5000);