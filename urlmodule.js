var http = require('http');
var url = require('url');
var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var parse = url.parse(address, true);
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(parse.host);
    res.write(parse.pathname);
    res.write(parse.search);
    res.end();
});
var query=parse.query;
console.log(query);
console.log(query.year);
console.log('server running')
server.listen(5000);