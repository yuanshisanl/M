/**
 * 功能：实现交易数据可视化(前端代码)
 */
const eChart = require('echarts');

//模块一：实现页面页签效果


//模块二：实现页面加载后加载数据
window.onload = function(){
    $.ajax({
        type:'GET',
        url:'/nonChart',
        success:function(result){
            //result是后台返回的数据,根据后台返回的数据将数据可视化到前端
            //初始化echarts到指定DOM中
            //console.log(result);
            var myChart = echarts.init(document.getElementById('left1'));
            //数据
            option = {
                title:{
                    text:'美元数据'
                },
                tooltip:{
                    //提示信息
                },
                legend:{
                    //数据说明
                    data:['几月份数据']
                },
                xAxis: {
                    type: 'category',
                    data: result[1]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: result[2],
                    type: 'line'
                }]
            };
        }
    })
};


//模块三：点击页签后从后台加载数据。



