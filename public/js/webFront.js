/**
 * 功能：实现 web书籍页面的内容
 */
/* web前端: 后台交互数据 */
(function(){
    $.ajax({
        type:'GET',
        url:'/webBook',
        success:function(webResult){
            //console.log(webResult);
            var html = "";
            for(var i=0; i < webResult.length; i++){
                var webList = webResult[i];
                html += `
                    <div class="frontContent">

        <!-- 左边部分 -->
        <div class="frontImage">
            <img src="images/${webList.pic}"/>
        </div>

        <!-- 右边部分内容 -->
        <div class="frontContentRight">
            <h1>
                书名：${webList.title}
            </h1>
            <p><strong>作者：</strong>${webList.author}</p>
            <p><strong>概要：</strong>${webList.summary}</p>
            <div>
                <p>
                    <strong>书评：</strong>
                </p>
                ${webList.comment}
            </div>
        </div>
    </div>
                `;
            }
            //将结果绑定到 “客户端”视图
            $("[id='frontMain']").html(html);
        }
    });
})();
