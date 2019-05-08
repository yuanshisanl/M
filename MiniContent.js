/**
 *功能：负责后端 从 “数据库”查找数据内容。
 */

const contentPool = require('./pool');

module.exports = {
    //首页： 查询数据库内容
    indexContent:(req,res)=>{
        contentPool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query(
                'SELECT * FROM homepage',
                (err,indexResult)=>{
                    if(err) throw err;
                    res.json(indexResult);//将查询的结果以json形式返回到客户端
                    conn.release();
            });
        })
    },

    //交易书籍：查询数据库内容
    traderContent:(req,res)=>{
        contentPool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query(
                'SELECT * FROM marketdealing',
                (err,traderResult)=>{
                    if(err) throw err;
                    //如果查询成功，将数据以json形式返回到客户端
                    res.json(traderResult);
                    conn.release();
            });
        });
    },

    //web书籍：查询数据库内容
    webContent:(req,res)=>{
        contentPool.getConnection((err,conn)=>{
            if(err) throw err;
            //连接成功后查询数据库
            conn.query(
                'SELECT * FROM frontend',
                (err,webResult)=>{
                    if(err) throw err;
                    //将数据结果以json格式输出
                    res.json(webResult);

                    conn.release();
            });
        });
    },

    //后端书籍：查询数据库内容
    endContent:(req,res)=>{
        contentPool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query(
                'SELECT * FROM afterend',
                (err,endResult)=>{
                    if(err) throw err;
                    //将查询到的数据以json格式输出
                    res.json(endResult);
                    conn.release();
            });
        });
    }


};


