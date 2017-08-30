var isLoggedIn = false;

function sendRequest(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("XHTTP URL: " + url);
            console.log("XHTTP response: " + xhttp.responseText);

            // Opens a new tab if not logged in
            if (~xhttp.responseText.indexOf("ust.space/login") && !isLoggedIn) {
                chrome.tabs.create({'url': "https://ust.space/home"});
                isLoggedIn = true;
                return false;
            } else if (!isLoggedIn) {
                return false;
            }
            return true;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function scrapeCourse(courseCode) {
    // Need to be logged into https://ust.space to succesfully get reviews
    var spaceURL = "https://ust.space/review/" + courseCode;
    console.log("USTSPACE URL: " + spaceURL);
    var response = sendRequest(spaceURL);
    console.log("Send request response: " + response);
    return response;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Received message from " + request.code);
        var response = scrapeCourse(request.code);
        sendResponse(response);
    }
);

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({'url': "https://w5.ab.ust.hk/wcq/cgi-bin/1710/"});
});
