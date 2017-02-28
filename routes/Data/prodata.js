var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: '3306',
    database: 'test'
});

connection.connect();

var  userProc = 'call P_UserInfo(?,?,?,@ExtReturnVal);';
var userProc_Params = [0,'Wilson Z','abcd'];
//调用存储过程
connection.query(userProc,userProc_Params,function (err, retsult) {
    if(err){
        console.log('[EXEC PROC ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------PROC----------------------------');
    console.log(retsult);
    console.log(retsult[0][0].ExtReturnVal);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();