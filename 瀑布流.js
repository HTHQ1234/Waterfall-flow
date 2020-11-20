function ajax(url, fn) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url, true); //三个参数分别为请求的方式，请求的地址和同步还是异步方式，true表示异步
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fn && fn(xhr.responseText);
        }
    }

}