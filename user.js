/**
 * 功能：user.js模块 实现项目注册 登录 相关后台程序
 */
//第一步：引入相关模块
const pool = require('./pool');
const qs = require('querystring');//解析查询字符串 解析传递过来的数据。

module.exports = {
    register:(req,res)=>{
        req.on("data",(buf)=>{
            //服务器接收客户端传送过来的数据 buf
            //将数据转换为字符串，并保存
            var registerObj = qs.parse(buf.toString());
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query(
                    "INSERT INTO user VALUES(NULL,?,?,now())",//？号占位符
                    [registerObj.uname,registerObj.upwd],
                    (err,registerResult)=>{
                        if(err) throw err;

                        //服务器向客户端响应数据，
                        var output = {
                            code:1,
                            msg:"注册成功",
                            uid:registerResult.insertId
                        };
                        res.json(output);
                        conn.release();//释放数据库
                });
            });
        });
    },

    login:(req,res)=>{
        req.on('data',(buf)=>{
            //将loginBuf中的数据转换为字符串
            var loginObj = qs.parse(buf.toString());
            //获取数据库连接操作数据
            pool.getConnection((err,conn)=>{
                if(err) throw err;
                conn.query(
                    'SELECT uid FROM user WHERE uname=? AND upwd=?',
                    [loginObj.uname,loginObj.upwd],//使用问号占位符防止SQL注入，涉及web安全
                    (err,loginResult)=>{
                        if(err) throw err;
                        if(loginResult.length>0) {
                            var output = {
                                code: 1,
                                msg: "登录成功",
                                uid: loginResult[0].uid
                            }
                        }else{
                            var output = {
                                code:2,
                                msg:"登录失败"
                            }
                        }
                        res.json(output);
                        conn.release();
                });
            });
        });
    }
};
