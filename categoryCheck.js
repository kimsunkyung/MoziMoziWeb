var categoryInfoUrl = "http://52.78.118.92:8080/appDev1/cProduct";
var Category = localStorage.getItem("categoryname");
var userId;
userId = localStorage.getItem("userid");


function product0(){
    var categoryname = document.getElementsByName('category')[0].id;
   localStorage.setItem("categoryname",categoryname);
   
}

function product1(){
    var categoryname = document.getElementsByName('category')[1].id;
  
    localStorage.setItem("categoryname",categoryname);
   
}

function product2(){
    var categoryname = document.getElementsByName('category')[2].id;

    localStorage.setItem("categoryname",categoryname);
   
}


function product3(){
    var categoryname = document.getElementsByName('category')[3].id;
   
    localStorage.setItem("categoryname",categoryname);
   
}


function product4(){
    var categoryname = document.getElementsByName('category')[4].id;

    localStorage.setItem('categoryname',categoryname);
   
}


function product5(){
    var categoryname = document.getElementsByName('category')[5].id;

    localStorage.setItem("categoryname",categoryname);
    
}


function product6(){
    var categoryname = document.getElementsByName('category')[6].id;

    localStorage.setItem("categoryname",categoryname);
    
}

function product7(){
    var categoryname = document.getElementsByName('category')[7].id;

    localStorage.setItem("categoryname",categoryname);
    
}

if(userId != null){
    document.getElementById("user").src = src="images/user.png";
}


function logout(){
    localStorage.removeItem('userid');
}

