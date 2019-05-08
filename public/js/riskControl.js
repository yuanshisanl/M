/**
 * 功能：实现“风险控制” 计算功能
 * 使用匿名函数
 */
(function(){
    //第一步：给计算按钮绑定事件
    $("[id='calculateBtn']").on('click',function(){
        //1:获取 input 中的值
        var balance = $("[id='balance']").val(),//总资产
            investment = $("[id='investment']").val(),//总投资
            marketValue = $("[id='marketValue']").val();//总市值
        //判断 input 中是否是空值
        if(balance == "" || investment == "" || marketValue == ""){
            alert("请在输入框中输入数值");
        }
        //第二步：计算“投资占比”和“投资收益率”
        var investmentProp = parseFloat(investment / balance);//投资占比
        var investmentRate = parseFloat((marketValue - investment) / investment) ;//投资收益率

        //第三步：将计算结果输出到 风险表中
        $("#riskResult td:nth-child(1)").html(balance+"(元)");
        $("#riskResult td:nth-child(2)").html(investment+"(元)");
        $("#riskResult td:nth-child(4)").html(marketValue+"(元)");

        //第四步：输出比率信息
        //1、投资比率
        //if(investmentProp.toFixed(2) > 0.6){
            $("#riskResult td:nth-child(3)").html((investmentProp*100).toFixed(2) + "%");
        //}else{
        //    $("#riskResult td:nth-child(3)")
        //        .html((investmentProp*100).toFixed(2) + "%");
        //}
        //2、收益比率
        //if(investmentRate.toFixed(2) < -0.2){
            $("#riskResult td:nth-child(5)").html((investmentRate*100).toFixed(2) + "%");
        //}else{
        //    $("#riskResult td:nth-child(5)")
        //        .html((investmentRate*100).toFixed(2) + "%");
        //}
    });
})();

