function getData(pageName, buttonName) {
    var page = document.getElementById(pageName);
    var button = document.getElementById(buttonName);

    // alert(page.innerHTML.length);
    if (page.innerHTML.length == 0) {
        // alert(1);
        var req = new XMLHttpRequest();
        req.open('get', 'http://127.0.0.1:8080/123/' + pageName + '.html');
        req.onload = function () {
            var page = document.getElementById(pageName);
            page.innerHTML = this.responseText;
            button.innerHTML = '隐藏';
        };
        req.send();
    } else {
        page.innerHTML = '';
        button.innerHTML = '显示';
    };
}
