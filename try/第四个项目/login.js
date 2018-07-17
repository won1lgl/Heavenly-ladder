function loadXMLDoc() {
    var x1 = document.getElementById('inputUsername');
    var x2 = document.getElementById('inputPassword');
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open('POST', 'www.baidu.com', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    alert(xmlhttp.readyState);
    alert(xmlhttp.status);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myDiv").innerHTML = "233333";
        }
    };
}



// window.location.href="welcome.html"; 页面跳转代码
