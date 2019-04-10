window.Check_Version = function() {
    var rv = -1; // Return value assumes failure.

    if (navigator.appName == 'Microsoft Internet Explorer') {

        var ua = navigator.userAgent,
            re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

        if (re.exec(ua) !== null) {
            rv = parseFloat(RegExp.$1);
        }
    } else if (navigator.appName == "Netscape") {
        /// in IE 11 the navigator.appVersion says 'trident'
        /// in Edge the navigator.appVersion does not say trident
        if (navigator.appVersion.indexOf('Trident') === -1) rv = 12;
        else rv = 11;
    }

    return rv;
}



window.getQueryString = function(name) {
    var queryObject = null;

    if (queryString != null) {
        return queryObject[name];
    }
    var params = {};
    var pattern1 = /([^&^=]+)=([^&^=]+)/g;
    var pattern2 = /([^=]+)/g;
    var is_input = document.URL.indexOf('?');
    if (is_input >= 0) {
        var queryString = document.URL.substring(is_input + 1, document.URL.length);
        var curMatch = [];
        var matchList = queryString.match(pattern1);
        for (var i in matchList) {
            curMatch = String(matchList[i]).match(pattern2);
            params[curMatch[0]] = curMatch[1];
        }
    }
    queryObject = params;
    return queryObject[name];
}