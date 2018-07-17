// var xmlHttp;
// xmlHttp = XMLHttpRequest();
// xmlHttp = createXMLHTTPObject();


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

function request(url, callback) {
    // xmlHttp.open("post", url, false);
    var xmlHttp = createXMLHTTPObject();
    if (!xmlHttp) {
        alert("FUCK!! xmlHttp is null!")
        return;
    }
    var method = "POST";
    xmlHttp.open(method, url, true);
    xmlHttp.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState !== 4) {
            alert("FUCK!! ReadyState is not 4!!!")
            return;
        }
        if (xmlHttp.status !== 200 && xmlHttp.status !== 304) {
            alert('HTTP error ' + xmlHttp.status);
            return;
        }
        callback(xmlHttp);
    };
    if (xmlHttp.readyState === 4) {
        return;
    }
    xmlHttp.send(null)
    // xmlHttp
    // xmlHttp.open("GET", "http://139.199.79.232/a.php", false);
    //
    // // xmlHttp.send("a=fuck");
    // xmlHttp.send(null);
    // alert(xmlHttp.responseText);
}

window.onload = function () {
    var b = document.getElementById('btn');
    var callback = function (xmlHttp) {
        var info = xmlHttp.responseText;
        alert("niubi"+info+"/");
    };
    b.onclick = function () {
        var url = "http://www.baidu.com";
        request(url, callback);
    }
};


