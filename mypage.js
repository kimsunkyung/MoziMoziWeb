var mypageurl = "http://52.78.118.92:8080/appDev1/mypage"
var hearturl = "http://52.78.118.92:8080/appDev1/HeartCheck";
var removeurl = "http://52.78.118.92:8080/appDev1/HeartRemove";
var userid;

userid = localStorage.getItem("userid");



function mypage(){
    
    

if(userid != null){
        document.getElementById("mypage").href = "mypage.html";
    }
    else{
        alert("로그인을 먼저 해주세요");
    }    
    
xh = new XMLHttpRequest();

data = {"userid":userid};
var json = JSON.stringify(data);

xh.open('POST',mypageurl,true);

xh.setRequestHeader('Content-type','application/json; charset=utf-8');
xh.onload = function () {

mypage = JSON.parse(xh.responseText);
    
   for(var i = 0; i<mypage.mypageProduct.length; i++){
    document.getElementById("item").insertAdjacentHTML('beforeend',"<div class = 'itemList'> <img class = 'product' id ="+"'product"+i+"'"+ "src = ' '>"+"<div class='container'> <h1 id = "+"'p_name"+i+"'"+"style='font-size:20px;'></h1>"+"<img onclick = 'productid( " + i + " );' src = 'images/add.png' style='display:inline-block; width:50px; margin-right:10px;'>"+
    "<img onclick = 'remove( " + i + " );' src = 'images/del.png' style='display:inline-block; width:50px; margin-right:10px;'>"+"<p id = "
    +"'p_brand"+i+"'"+"style='color:gray;'></p> <br> <a class='link' id = "+"'p_link"+i+"'"+">Go Link</a> </div>");
       
}
   
for(var l =0; l<mypage.mypageProduct.length; l++){
    
    document.getElementById("product"+l).src=mypage.mypageProduct[l].p_img;
    
    document.getElementById("p_name"+l).textContent=mypage.mypageProduct[l].p_name;
    
    document.getElementById("p_brand"+l).textContent=mypage.mypageProduct[l].p_brand;
    
    document.getElementById("p_link"+l).href=mypage.mypageProduct[l].p_url;
    
}
    
    
    
    document.getElementById("username").textContent = userid+"님 환영합니다.";
    
 


};
    


xh.send(json);
  
}


function productid(id){
    
    localStorage.setItem('productid',mypage.mypageProduct[id].p_id);
   
    var productid = localStorage.getItem('productid');
   
    hh = new XMLHttpRequest();
    
    data = {"userid": userid,"productid" : Number(productid)};
    var json = JSON.stringify(data);
   
    hh.open('POST',hearturl,true);

    hh.setRequestHeader('Content-type','application/json; charset=utf-8');
    hh.onload = function () {

    result = JSON.parse(hh.responseText);

     if(result.success == true){
                alert("마이페이지에 추가 되었습니다");
        }

        else{

        }

    };
 
hh.send(json);


}

function remove(id){
    
    localStorage.setItem('productid',mypage.mypageProduct[id].p_id);
  
    
    var productid = localStorage.getItem('productid');
   
    hh = new XMLHttpRequest();
    
    data = {"userid": userid,"productid" : Number(productid)};
    var json = JSON.stringify(data);
    console.log(json);
    hh.open('POST',removeurl,true);

    hh.setRequestHeader('Content-type','application/json; charset=utf-8');
    hh.onload = function () {

    result = JSON.parse(hh.responseText);

     if(result.success == true){
                alert("마이페이지에서 삭제되었습니다");
        }

        else{

        }

    };
 
hh.send(json);


}


if(userid != null){
    document.getElementById("user").src ="images/user.png";

}

function mypage2(){
    if(userid != null){
        document.getElementById("mypage").href = "mypage.html";
    }
    else{
        alert("로그인을 먼저 해주세요");
    }
}

function logout(){
    localStorage.removeItem('userid');
}


window.onload = function(){mypage();};