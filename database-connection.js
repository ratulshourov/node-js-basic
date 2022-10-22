var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected');
    var sql="CREATE TABLE customers(id int(11) primary key  ,name varchar(255), address varchar(255))";
    con.query(sql,function(err,result){
        if(err) {
            throw err;
        }
        console.log('create customer  table');
    });
});

