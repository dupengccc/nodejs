var express = require('express');
var router = express.Router();
///调用mysql 模块
var mysql=require('mysql');

var sqlConnection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    port:'3306',
    database: 'test',
});
sqlConnection.connect(function (err){
     if(err){
         console.log('[equest]:'+err);
         return;
     }
      console.log("连接成功！"+err);
      sqlConnection.query('select 1+1 as name',function (err,rows,fieds){
          if (err) {
              console.log('[query] - :'+err);
              return;
          }
          console.log('The solution is: ', rows[0].name);
      })
})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with  222');
});

module.exports = router;
