/**
 * 作者：张世杰
 * 功能：小小鸟项目主程序
 * 版本：version_1.0
 */
//第一步：通过（http express模块创建项目服务，监听8080端口）
const http = require('http');
const express = require('express');
//第三方模块：数据查询
const user = require('./user');
const index = require('./MiniContent');
const chart = require('./dataChart');
//调用express模块
var app = express();
//创建http服务，并监听指定端口
http.createServer(app).listen(8080);
//第二步：通过express 的中间件，访问项目静态资源
app.use(express.static('public'));
/*以上是第一部分的内容*/

//第三步：通过路由post，实现‘注册’页面相关后台功能
app.post('/register',user.register);

//第四步：通过路由post,实现‘登录’页面相关后台功能
app.post('/login',user.login);

/*以上是用户注册的内容*/

//第五步：通过路由get 实现相关 ‘主页’ 后台功能
app.get('/miniBird',index.indexContent);

//第六步：通过路由get 实现相关 ‘交易书籍’ 后台功能
app.get('/traderBook',index.traderContent);

//第七步：通过路由get 实现相关 ‘web书籍’ 后台功能
app.get('/webBook',index.webContent);

//第八步：通过路由get 实现相关 ‘后端书籍’ 后台功能
app.get('/endBook',index.endContent);

//模块九：实现非农就业人口变动
app.get('/nonChart',chart.nonData);

//模块十：实现中国财新制造业PMI



