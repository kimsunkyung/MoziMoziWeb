var url = "http://52.78.118.92:8080/appDev1/user"
var id;
var pwd;
var result;
var userid;
userid = localStorage.getItem("userid");

function user(){


id = document.getElementById('userid').value;
pwd = document.getElementById('password').value;
    
localStorage.setItem('userid',id);

    
hh = new XMLHttpRequest();

data = {"userid": id,"password" : pwd};
var json = JSON.stringify(data);

hh.open('POST',url,true);

hh.setRequestHeader('Content-type','application/json; charset=utf-8');
hh.onload = function () {

result = JSON.parse(hh.responseText);

 if(result.success == true){
        window.location.href = "index.html";

    }

    else{
       alert("아이디 혹은 비밀번호를 확인해주세요");
    }
    
};
 
hh.send(json);


}

function mypage(){
    if(userid != null){
        document.getElementById("mypage").href = "mypage.html";
    }
    else{
        alert("로그인을 먼저 해주세요");
    }
}

if(userid != null){
    document.getElementById("user").src ="images/user.png";
}
