function getCoursePage(course) {
    return chrome.runtime.sendMessage(course, function(response) {
        var oldResponse = JSON.parse(response);
        console.log("Message response: " + response);
    });
}

if (document.readyState === "complete") {
    var courses = document.getElementsByTagName("h2");

    for (var i = 0; i < courses.length; i++) {
        var courseCode = courses[i].innerText.slice(0,10).replace(/\s/g, '');
        var url = "https://ust.space/review/" + courseCode;
        console.log(courseCode + "\'s URL: " + url);
        courses[i].innerHTML +=  " <a class='rating lower-bar' target='_blank' href=" + url + ">Rating</a>";

        var courseJSON = {code: courseCode};
        console.log("Getting " + courseJSON.code + " rating");
        getCoursePage(courseJSON);
    }
}
