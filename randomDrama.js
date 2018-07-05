var randomUrl = "http://52.78.118.92:8080/appDev1/RandomDrama";
var userid;
var http = new XMLHttpRequest();
http.open("GET", randomUrl, false);
http.send();

drama = JSON.parse(http.responseText);

var dramaList = [0,1,2,3];

for(var l of dramaList){
    document.getElementById("dramaImg"+l).src = drama.dramaList[l].d_img;
  
    
} 

userid = localStorage.getItem("userid");



function dramaid(id){
    localStorage.setItem('dramaid',drama.dramaList[id].d_id);
}

if(userid != null){
    document.getElementById("user").src = src="images/user.png";
}

function logout(){
    localStorage.removeItem('userid');
}

function mypage(){
    if(userid == null){
         alert("로그인을 먼저 해주세요");
        
    }
    else{
        document.getElementById("mypage").href = "mypage.html";
    }
}
