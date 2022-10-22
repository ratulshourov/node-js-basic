var http=require('http');
var fs= require('fs');
//Create New File
// var server=http.createServer(function(req,res){
//     fs.appendFile('myfile.txt','Create File',function(err) {
//         if(err) throw err;
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write('File Created');
//     })
// });

// Write The File 
// var server=http.createServer(function(req,res){
//     fs.writeFile('myfile2.txt','newText',function(err) {
//         if(err) throw err;
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write('Write into the File ');
//         res.end();
//     })
// });

//delete the file
var server=http.createServer(function(req,res){
    fs.unlink('myfile2.txt',function(err) {
        if(err) throw err;
        res.writeHead(200,{'content-type':'text/html'})
        res.write('Delete the File ');
        res.end();
    })
});
console.log('server running !');
server.listen(5000);