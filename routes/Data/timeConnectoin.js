var mysql= require('mysql');
var config={
       host:'localhost',
       user:'root',
       password:'',
       port:'3306',
       database:'test',
}
var sqlConnection;
function  handDistonConnect()
{
        sqlConnection=mysql.connect(config);
        sqlConnection.connect(function (err){
        if(err)
        {
            console.log("进行断线重新连"+new Date());
             setTimeout(handDistonConnect(),2000)  ;
        }else
        {
            console.log("进行成功");
        }
        sqlConnection.on('error', function(err) {
                console.log('db error', err);
                if(err.code === 'PROTOCOL_CONNECTION_LOST') {
                    handDistonConnect();
                } else {
                    throw err;
                }
            });
      });
}
handDistonConnect();

