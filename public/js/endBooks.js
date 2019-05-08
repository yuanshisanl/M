/**
 * 功能：实现后端书籍 交互
 */
(function(){
    $.ajax({
        type:'GET',
        url:'/endBook',
        success:function(endResult){
            //console.log(endResult);
            var html = "";
            for(var i = 0; i < endResult.length; i++){
                var endList = endResult[i];
                //console.log(endList);
                html += `
                    <div class="frontContent">

        <!-- 左边部分 -->
        <div class="frontImage">
            <img src="images/${endList.pic}"/>
        </div>

        <!-- 右边部分内容 -->
        <div class="frontContentRight">
            <h1>
                书名：${endList.title}
            </h1>
            <p><strong>作者：</strong>${endList.author}</p>
            <div>
                <p>
                    <strong>书评：</strong>
                </p>
                ${endList.comment}
            </div>
        </div>
    </div>
                `;
            }

            //将数据绑定到视图
            $("[id='frontMain']").html(html);
        }
    });
})();
