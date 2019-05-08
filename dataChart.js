/**
 * 功能：实现数据分析表后台功能
 */
    //引入数据库连接池
const contentPool = require('./pool');

module.exports = {
    //模块一：查询非农数据
    nonData:(req,res)=>{
        contentPool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query(
                'SELECT * FROM nonfarmmployment',
                (err,indexResult)=>{
                    if(err) throw err;
                    res.json(indexResult);//将查询的结果以json形式返回到客户端
                    conn.release();
                });
        })
    },
    //模块二：实现财新服务业(PMI)数据
    nonD:(req,res)=>{
        contentPool.getConnection((err,conn)=>{
            if(err) throw err;
            conn.query(
                'SELECT * FROM caixinmanufacturing',//从数据库表中
                (err,result)=>{
                    if(err) throw err;
                    res.json(result);//将查询结果以json形式返回到客户端
                    conn.release();
                }
            );
        });
    }
};