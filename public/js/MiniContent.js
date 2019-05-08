/**
 * 功能：负责“前端”和 “后端”数据交互
 */

/* 首页：后台交互数据 */
(function(){
    $.ajax({
        type:'GET',
        url:'/miniBird',
        success:function(result){
            //console.log(result);数据查询成功
            //1、将从后台查询的数据绑定到视图
            //console.log(result);
            var html = "";
            //遍历查询服务器返回的结果
            for(var i=0; i < result.length; i++){
                var o = result[i];
                html += `<div class="books_content">
                <!-- 左边图片部分 -->
        <div class="section_left">
            <p>
                <img src="images/${o.pic}"/>
            </p>
        </div>

        <!-- 右边内容 -->
        <div class="section_right">
            <h1>
                <strong>书名：</strong>
                ${o.title}
            </h1>
            <p>
                <strong>作者：</strong>
                约翰.墨菲
            </p>
            <p>
                <strong>概要：</strong>
                ${o.summary}
            </p>
            <div>
                <p class="commentBooks">书评：</p>
                ${o.comment}
            </div>
        </div>
        </div>
            `;
            }

            $("#main_container").html(html);
        }
    });
})();

/* 交易书籍：后台交互数据 */
(function(){
    $.ajax({
        type:'GET',
        url:'/traderBook',
        success:function(traderResult){
            //console.log(traderResult);
            var html = "";
            for(var i=0; i < traderResult.length; i++){
                var traderList = traderResult[i];

                //将数据拼接到数据库
                html += `
                    <div class="frontContent">

        <!-- 左边部分 -->
        <div class="frontImage">
            <img src="images/${traderList.pic}"/>
        </div>

        <!-- 右边部分内容 -->
        <div class="frontContentRight">
            <h1>
                书名：${traderList.title}
            </h1>
            <p><strong>作者：</strong>${traderList.author}</p>
            <p><strong>概要：</strong>${traderList.summary}</p>
            <div>
                <p>
                    <strong>书评：</strong>
                </p>
                ${traderList.comment}
            </div>
        </div>
    </div>
                `;
            }
            //将数据拼接到视图(view)
            $("[id='frontMain']").html(html);
        }
    });
})();

