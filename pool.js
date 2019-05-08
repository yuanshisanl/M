/**
 * 功能：创建数据库连接池并导出
 */

const mysql = require('mysql');

var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    port:3306,
    database:'miniBird',
    connectionLimit:5
});

//导出数据库连接池
module.exports = pool;