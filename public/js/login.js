/*
* 功能：实现 登录页面 异步操作,匿名函数
* */
//功能点1：登录页面 input 样式改变
//step1:获取input
var txtName = document.querySelector("[name=user_name]");
var txtPwd = document.querySelector("[name=user_password]");

function getFocus(){
    this.className = "onFocus";
}
txtName.onfocus = getFocus;
txtPwd.onfocus = getFocus;
//失去焦点
function lostFocus(){
    this.className = "";
}
txtName.onblur = lostFocus;
txtPwd.onblur = lostFocus;


(function(){
    $("#bt-login").click(function(){
        //获取表单信息
        var n = $("#user_login").val();
        var p = $("#password_login").val();
        //客户端 异步 向服务器端
        $.ajax({
            type:"POST",
            url:"/login",
            data:{uname:n,upwd:p},
            success:function(loginResult){
                if(loginResult.code === 1){
                    sessionStorage["uname"] = n;
                    sessionStorage["uid"] = loginResult.uid;
                    location.href = "miniBird.html";
                }else if(loginResult.code === 2){
                    alert(loginResult.msg+"用户名或密码错误！请稍后重试")
                }
            }
        });
    })
})();
