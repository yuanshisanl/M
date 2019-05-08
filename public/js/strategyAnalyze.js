/**
 * 功能：策略分析计算功能
 * */
(function(){
    //第一步：为计算按钮绑定事件监听
    $("[id='intrinsicValueBtn']").on('click',function(){
        //1、获取表单元素中的值并保存
        var totalAssets = $("[id='totalAssets']").val(),//总资产
         grossLiability = $("[id='grossLiability']").val(),//总负债
         totalCapital = $("[id='totalCapital']").val(),//总股本
        closePrice = $("[id='closePrice']").val(),//当日收盘价
        //2、股票内在价值 = (总资产 - 总负债) / 总股本
        intrinsicValue = (totalAssets - grossLiability) / totalCapital,
        //3、溢出比率 = (当日收盘价 - 内在价值) / 内在价值
        overflowRate = (closePrice - intrinsicValue) / intrinsicValue;

        if(totalAssets == "" || grossLiability == "" || totalCapital == "" || closePrice == ""){
            alert("表单内容不能为空");
        }else{
            //内在价值
            $("#outputResult>ul li:nth-child(1) a").html("内在价值：" + parseFloat(intrinsicValue).toFixed(2) + "(元)");
            //溢出比率
            $("#outputResult>ul li:nth-child(2) a").html("溢出比率：" + parseFloat(overflowRate).toFixed(2)*100 + "%");
            //当日收盘价
            $("#outputResult>ul li:nth-child(3) a").html("收盘价：" + closePrice + "(元)");
        }
    })
})();


$(document).ready(function(){
    $('.left').on('mouseenter','li a',function(e){
        //阻止默认行为
        e.preventDefault();
        $(this).parent().addClass('active').siblings('.active').removeClass('active');
        //通过a的href属性找到对应的右侧div 修改 .active的位置
        var id = $(this).attr('href');
        //通过div的id属性，修改样式
        $(id).addClass('active').siblings('.active').removeClass('active');
    });
});



