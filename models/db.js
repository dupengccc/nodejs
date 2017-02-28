/**
 * Created by Administrator on 2017/2/21.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'forum'
});
