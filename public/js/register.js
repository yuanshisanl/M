/*
* 功能：注册页面相关 JS
* */
(function(){
    //功能点1：表单样式更改
    var txtName = document.querySelector("[name=user_name]");
    var txtPwd = document.querySelector("[name=user_password]");
//1、获取焦点
    txtName.onfocus = getFocus;
    txtPwd.onfocus = getFocus;
//获取焦点函数
    function getFocus(){
        this.className = "uNameFocus";
    }
//失去焦点函数
    function lostFocus(){
        this.className = "";
    }
//失去焦点
    txtName.onblur = lostFocus;
    txtPwd.onblur = lostFocus;

    //功能点2：匿名函数实现 注册 功能。
    $("#bt-register").click(function(){
        var n = $("#user_login").val();//注册用户名
        var p = $("#password_login").val();//注册密码
        //ajax 客户端异步向服务器端传送数据
        $.ajax({
            type:"POST",
            url:"/register",//主程序的路由地址
            data:{uname:n,upwd:p},
            success:function(registerResult){
                if(registerResult.code === 1){
                    location.href = "login.html";
                }else{
                    alert("用户名或者密码错误，请稍后重试");
                }
            }
        });
    });
})();