function createXMLHTTPObject() {
    var XMLHttpFactories = [
        function () {
            return new XMLHttpRequest()
        },
        function () {
            return new ActiveXObject("Msxm12.XMLHTTP")
        },
        function () {
            return new ActiveXObject("Msxm13.XMLHTTP")
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
    ];
    var xmlhttp = false;
    for (var i = 0; i < XMLHttpFactories.length; i++) {
        try {
            xmlhttp = XMLHttpFactories[i]();
        } catch (e) {
            continue;
        }
        break;
    }
    return xmlhttp;
}

function request(url) {
    xmlHttp.open("get",url,false);
    xmlHttp.send(null);
    alert(xmlHttp.responseText);
}

window.onload=function () {
    var b=document.getElementById('btn');
    b.onclick=function () {
        var url="http://139.199.79.232/a.php";
        request(url);
    }
}
