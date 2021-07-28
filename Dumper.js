if (document.domain == 'isgcblock.iss.netstar-inc.com'){
    document.getElementById('Msg_01').textContent = 'このウェブサイトは現在書き換え中です。しばらくお待ちください';
    var blocked_url = document.getElementById('url').textContent;
    var uri = new URL(blocked_url);
    var domain = uri.hostname;
    if (domain == 'www.google.co.jp'){
        blocked_url = uri.searchParams.get('url');
        document.getElementById('url').textContent = blocked_url;
        domain = new URL(blocked_url).hostname;
    }
    if (domain == 'www.youtube.com'){
        var hack_url = 'https://arcane-peak-32688.herokuapp.com/js?url=';
        var new_url =　hack_url + blocked_url;
        var request = new XMLHttpRequest();
        request.open('GET', new_url, true);
        request.onload = function () {
            d = document;
            var data = this.response;
            data  = "data:video/mp4;base64," + data;
            code = '<video controls><source src=' + data + ' type="video/mp4"></video>';
            d.write(code)  
        }

        request.send();


    }
    else{
        var hack_url = 'https://arcane-peak-32688.herokuapp.com/css?url=';
        var new_url =　hack_url + blocked_url;
        var request = new XMLHttpRequest();
        request.open('GET', new_url, true);
        request.onload = function () {
            d = document;
            var data = this.response;
            d.write(data)  
        }
        request.send();

    }
    

}
else{
    alert('unsupported URL')
}

