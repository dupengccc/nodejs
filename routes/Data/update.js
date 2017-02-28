var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : '192.168.0.200',
    user     : 'root',
    password : 'abcd',
    port: '3306',
    database: 'nodesample',
});

connection.connect();

var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['钟慰', '5678',1];
//改
connection.query(userModSql,userModSql_Params,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();