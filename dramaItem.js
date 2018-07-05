var url = "http://52.78.118.92:8080/appDev1/Product"
var dramaInfoUrl = "http://52.78.118.92:8080/appDev1/dramaInfo";
var categoryInfoUrl = "http://52.78.118.92:8080/appDev1/cProduct";
var hearturl = "http://52.78.118.92:8080/appDev1/HeartCheck";
var removeurl = "http://52.78.118.92:8080/appDev1/HeartRemove";
var userid = localStorage.getItem('userid');
var dramaid = localStorage.getItem("dramaid");
var Category = localStorage.getItem("categoryname");



function Item(){
    
var dramaid = localStorage.getItem("dramaid");




hh = new XMLHttpRequest();

data = {"dramaid": Number(dramaid)};
var json = JSON.stringify(data);

hh.open('POST',url,true);

hh.setRequestHeader('Content-type','application/json; charset=utf-8');
hh.onload = function () {

product = JSON.parse(hh.responseText);

for(var i = 0; i<product.categoryProductList.length; i++){
    document.getElementById("item").insertAdjacentHTML('beforeend',"<div class = 'itemList'> <img class = 'product' id ="+"'product"+i+"'"+ "src = ' '>"+"<div class='container'> <h1 id = "+"'p_name"+i+"'"+"style='font-size:20px;'></h1>"+"<img onclick = 'productid( " + i + " );' src = 'images/add.png' style='display:inline-block; width:50px; margin-right:10px;'>"+
    "<img onclick = 'remove( " + i + " );' src = 'images/del.png' style='display:inline-block; width:50px; margin-right:10px;'>"+"<p id = "
    +"'p_brand"+i+"'"+"style='color:gray;'></p> <br> <a class='link' id = "+"'p_link"+i+"'"+">Go Link</a> </div>");
       
}

for(var l =0; l<product.categoryProductList.length; l++){
    
    document.getElementById("product"+l).src=product.categoryProductList[l].p_img;
    document.getElementById("p_name"+l).textContent=product.categoryProductList[l].p_name;
    
    document.getElementById("p_brand"+l).textContent=product.categoryProductList[l].p_brand;
    
    document.getElementById("p_link"+l).href=product.categoryProductList[l].p_url;
}

};

hh.send(json);
    
}


function productid(id){
    localStorage.setItem('productid',product.categoryProductList[id].p_id);
   
   
    
    var productid = localStorage.getItem('productid');
   
    ht = new XMLHttpRequest();
    
    data = {"userid": userid,"productid" : Number(productid)};
    var json = JSON.stringify(data);
   
    ht.open('POST',hearturl,true);

    ht.setRequestHeader('Content-type','application/json; charset=utf-8');
    ht.onload = function () {

    result = JSON.parse(ht.responseText);

     if(result.success == true){

            window.alert("마이페이지에 추가되었습니다");
        }

        else{

        }

    };
 
ht.send(json);


}



function remove(id){
    
    localStorage.setItem('productid',product.categoryProductList[id].p_id);
   
    
    var productid = localStorage.getItem('productid');
   
    hh = new XMLHttpRequest();
    
    data = {"userid": userid,"productid" : Number(productid)};
    var json = JSON.stringify(data);
   
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




function Item2(){

http = new XMLHttpRequest();

data = {"dramaid": Number(dramaid)};
var json = JSON.stringify(data);

http.open('POST',dramaInfoUrl,true);

http.setRequestHeader('Content-type','application/json; charset=utf-8');
http.onload = function () {

drama = JSON.parse(http.responseText);

document.getElementById("dramaImg").src = drama.dramaList[0].d_img;
document.getElementById("dramaName").textContent = drama.dramaList[0].d_name;
document.getElementById("dramaAct").textContent = drama.dramaList[0].d_act;

};

http.send(json);


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
    document.getElementById("user").src = "images/user.png";
}


function logout(){
    localStorage.removeItem('userid');
}



window.onload = function(){Item(); Item2();};