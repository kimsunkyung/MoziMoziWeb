var url = "http://52.78.118.92:8080/appDev1/signUp"
var id;
var pwd;
var uname;
var umail;
var join;

function userInsert(){

id = document.getElementById('userid').value;
pwd = document.getElementById('password').value;
uname = document.getElementById('username').value;
umail = document.getElementById('usermail').value; 
    
hh = new XMLHttpRequest();

data = {"userid": id,"password" : pwd,"username":uname, "usermail":umail};
var json = JSON.stringify(data);

hh.open('POST',url,true);

hh.setRequestHeader('Content-type','application/json; charset=utf-8');
hh.onload = function () {

join = JSON.parse(hh.responseText);

    
if(join.success == true){

    alert("회원가입이 완료되었습니다");
    window.location.href="index.html";
    }

    else{
    alert("아이디가 중복됩니다. 다른 아이디로 가입을 해주세요");
    }

};

hh.send(json);


}



if(userId != null){
    document.getElementById("user").src ="images/user.png";
}



