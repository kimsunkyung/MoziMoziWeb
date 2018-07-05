var channelurl = "http://52.78.118.92:8080/appDev1/channel";

var channelname = localStorage.getItem("channelname");
var dramaid = localStorage.getItem("dramaid");
var userid = localStorage.getItem("userid");
console.log(channelname);


function channel(){
    
    xhr = new XMLHttpRequest();
    data = {"channelname": channelname};
    var json = JSON.stringify(data);

    xhr.open('POST',channelurl,true);

    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {

    product = JSON.parse(xhr.responseText);


    for(var l =0; l<3; l++){
        
        document.getElementById("dramaImg"+l).src=product.dramaList[l].d_img;
       
       
    }

    };

    xhr.send(json);
 

}

function drama(id){
    localStorage.setItem('dramaid', product.dramaList[id].d_id);
    console.log(product.dramaList[0].d_id);
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

function logout(){
    localStorage.removeItem('userid');
}


window.onload = function(){channel();};