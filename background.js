function sendRequest(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("XHTTP URL: " + url);
            console.log("XHTTP response: " + xhttp.responseText);
            return response = xhttp.responseUrl;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function scrapeCourse(courseCode) {
    // Need to be logged into https://ust.space
    // TODO: Open tab to log into USTSPACE if not logged in
    var spaceURL = "https://ust.space/review/" + courseCode;
    console.log("USTSPACE URL: " + spaceURL);
    return sendRequest(spaceURL);
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
