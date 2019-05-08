SET NAMES UTF8;
DROP DATABASE IF EXISTS miniBird;
CREATE DATABASE miniBird CHARSET=UTF8;
USE miniBird;
/* 用户表 user */
CREATE TABLE user(
    uid             INT PRIMARY KEY AUTO_INCREMENT,
    uname           VARCHAR(24),
    upwd            VARCHAR(24),
    registerTime    DATETIME
);

INSERT INTO user VALUES
(1,'772083966@qq.com','123456zx',now());

/* 首页数据库表 homePage */

CREATE TABLE homePage(
    homePageId INT PRIMARY KEY AUTO_INCREMENT,
    pic    VARCHAR(24),
    title  VARCHAR(100),
    author VARCHAR(24),
    summary VARCHAR(300),
    comment VARCHAR(300)
);
INSERT INTO homePage VALUES
(1,
    'trade_bible.png',
    '《交易圣经》','布特雷.奔富',
    '此书从交易过程，交易通用原则，资金管理，交易方法，心里因素阐述了交易的整个过程。',
    '《交易圣经》站在一个从业者角度阐述了市场交易的全部过程，从一个从业者最初入市，到交易多年并总结出一定的市场交易理念的一个过程。无论是股票，外汇，期货，债券等都可以参考本书所阐述的原则，方法，心里因素等内容。另外，本书在最后提供了—爆仓风险模拟计算器的计算方法和代码。'),
(2,
    'JavaScriptCore.jpg',
    '《JavaScript高级程序设计》',
    'Nicholas C.Zakas',
    '《JavaScript高级程序设计》全面涵盖了JavaScript的各种高级、实用的特性',
    '《JavaScript高级程序设计》从JavaScript基本原理上进行剖析，可以这么说《JavaScript高级程序设计》可以帮助JavaScript开发人员更好的理解JavaScript这门语言，适合有一定基础的JavaScript开发人员阅读。'),
(3,
    'investment.png',
    '《投资最重要的事》',
    '霍华德.马克斯',
    '这是一本适合所有投资者阅读的价值投资名著',
    '此书将价值投资的原则和方法写得直至要害，从交易思维层面，价值与价格层面，风险层面，周期、钟摆、运气层面等等诸多层面剖析了价值投资的方法和本质。');

/*数据库表 frontEnd 相关数据库内容 */

CREATE TABLE frontEnd(
    frontEndId INT PRIMARY KEY AUTO_INCREMENT,
    pic   VARCHAR(24),
    title VARCHAR(100),
    author VARCHAR(24),
    summary VARCHAR(300),
    comment VARCHAR(300)
);
INSERT INTO frontEnd VALUES
(1,
    'JavaScriptBase.jpg',
    '《JavaScript权威指南》',
    'David Flanagan',
    '此书是JavaScript程序员公认的《圣经》',
    'JavaScript是面向的Web的编程语言并且是当今世上使用最广泛的编程语言，《JavaScript权威指南》阐述了JavaScript编程语言的基础内容及客户端JavaScript的内容(DOM CSS jQuery库等)，对于Web开发者来	说，此书的内容是实现用户交互必备的参考书籍。'),
(2,
    'JavaScriptCore.jpg',
    '《JavaScript高级程序设计》',
    'Nicholas C.Zakas',
    '《JavaScript高级程序设计》全面涵盖了JavaScript的各种高级、实用的特性',
    '《JavaScript高级程序设计》从JavaScript基本原理上进行剖析，可以这么说《JavaScript高级程序设计》可以帮助JavaScript开发人员更好的理解JavaScript这门语言，适合有一定基础的JavaScript开发人员阅读。');

/* 交易书籍数据库表 marketDealing */
CREATE TABLE marketDealing(
    frontEndId INT PRIMARY KEY AUTO_INCREMENT,
    pic   VARCHAR(24),
    title VARCHAR(100),
    author VARCHAR(24),
    summary VARCHAR(300),
    comment VARCHAR(300)
);
INSERT INTO marketDealing VALUES
(1,
    'trade_bible.png',
    '《交易圣经》',
    '布特雷.奔富',
    '此书从交易过程，交易通用原则，资金管理，交易方法，心里因素阐述了交易的整个过程。',
    '《交易圣经》站在一个从业者角度阐述了市场交易的全部过程，从一个从业者最初入市，到交易多年并总结出一定的市场交易理念的一个过程。无论是股票，外汇，期货，债券等都可以参考本书所阐述的原则，方法，心里因素等内容。另外，本书在最后提供了—爆仓风险模拟计算器的计算方法和代码。'),
(2,
    'tocket_market.png',
    '《股票作手回忆录》',
    '杰西.利弗莫尔',
    '《股票作手回忆录》是利弗莫尔在晚年缩写的市场交易的回忆录',
    '《股票作手回忆录》是由20世纪华尔街上最大的传奇—杰西.利弗莫尔所写，因为书名有(回忆录)三个字，所以本书最大的亮点是利弗莫尔的一生在交易市场的个人交易经验。'),
(3,
    'theory_waves.png',
    '《艾略特波浪理论》',
    '小罗伯特 R. 普莱切特',
    '此书介绍了艾略特波浪理论的形成以及如何操作艾略特波浪理论',
    '《艾略特波浪理论》属于市场交易技术派书籍，全书阐述一个理论—交易市场的变化时遵循一定的波浪在运动的。以及如何结合比率分析，斐波纳契时间序列进行市场交易。'),
(4,
    'investment.png',
    '《投资最重要的事》',
    '霍华德.马克斯',
    '这是一本适合所有投资者阅读的价值投资名著',
    '此书将价值投资的原则和方法写得直至要害，从交易思维层面，价值与价格层面，风险层面，周期、钟摆、运气层面等等诸多层面剖析了价值投资的方法和本质。'),
(5,
    'futures_market.jpg',
    '《期货市场技术分析》',
    '约翰.墨菲',
    '此书的核心内容是—期货市场技术分析',
    '《期货市场技术分析》阐述了技术分析的理论基础，市场交易趋势的基本概念，主要反转形态，持续形态，移动平均线，摆动指数等常用的市场交易技术，对于技术派交易员或者初入交易市场的人员，此书是不可多得的参考资料。');

/* 后端相关页面表 afterEnd */
CREATE TABLE afterEnd(
    frontEndId INT PRIMARY KEY AUTO_INCREMENT,
    pic   VARCHAR(24),
    title VARCHAR(100),
    author VARCHAR(24),
    comment VARCHAR(300)
);
INSERT INTO afterEnd VALUES
(1,
    'python.png',
    '《Python编程从入门到实践》',
    'Eric Matthes',
    '1、阐述了python编程语言的基础内容，2、使用python开发游戏，3、数据可视化—matplotlib，4、python Web开发框架Django，适合初学者。'),
(2,
    'python_data.png',
    '《Python数据科学手册》',
    'JAKE VanderPlas',
    '1、iPython 2、Numpy (Numpy提供了高效存储和操作密集数据缓存的接口，是整个数据科学工具的核心)，3、pandas(pandas是在Numpy基础上建立的新程序库，提供了一种高效的DataFrame数据结构)，4、matplotlib(更加详细的介绍了matplotlib，并介绍了更高级数据可视化工具Seaborn) ，5、机器学习(介绍了Scikit-Learn工具，及决策树与随机森林、聚类、朴素贝叶斯等算法)');

/* 策略分析数据库表 marketAnalysis */

/*美国季调后非农就业人口变动数据表*/
CREATE TABLE nonfarmmployment(
    nonfarmId INT PRIMARY KEY AUTO_INCREMENT,
    dateInfo VARCHAR(24),
    nonfarmValue VARCHAR(24)
)

INSERT INTO nonfarmmployment VALUES
(1,'2017-02','23.50'),
(2,'2017-03','9.80'),
(3,'2017-04','21.10'),
(4,'2017-05','13.80'),
(5,'2017-06','22.20'),
(6,'2017-07','20.90'),
(7,'2017-08','15.60'),
(8,'2017-09','-3.30'),
(9,'2017-10','26.10'),
(10,'2017-11','22.80'),
(11,'2017-12','14.80'),
(12,'2018-01','20.00'),
(13,'2018-02','31.30'),
(14,'2018-03','10.30'),
(15,'2018-04','16.40'),
(16,'2018-05','22.30'),
(17,'2018-06','21.30'),
(18,'2018-07','15.70'),
(19,'2018-08','20.10'),
(20,'2018-09','13.40'),
(21,'2018-10','25.00'),
(22,'2018-11','15.50'),
(23,'2018-12','31.20'),
(24,'2019-01','30.40'),
(25,'2019-02','20.00');

/*中国财新制造业PMI*/
CREATE TABLE caixinmanufacturing(
    caixinmanuId INT PRIMARY KEY AUTO_INCREMENT,
    caixindate VARCHAR(24),
    caixinValue VARCHAR(24)
)
INSERT INTO caixinmanufacturing VALUES
(1,'2017-02','51.70'),
(2,'2017-03','51.20'),
(3,'2017-04','50.30'),
(4,'2017-05','49.60'),
(5,'2017-06','50.40'),
(6,'2017-07','51.10'),
(7,'2017-08','51.60'),
(8,'2017-09','51.00'),
(9,'2017-10','51.00'),
(10,'2017-11','50.80'),
(11,'2017-12','51.50'),
(12,'2018-01','51.50'),
(13,'2018-02','51.60'),
(14,'2018-03','51.00'),
(15,'2018-04','51.10'),
(16,'2018-05','51.10'),
(17,'2018-06','51.00'),
(18,'2018-07','50.80'),
(19,'2018-08','50.60'),
(20,'2018-09','50.00'),
(21,'2018-10','50.10'),
(22,'2018-11','50.20'),
(23,'2018-12','49.70'),
(24,'2019-01','48.30');
