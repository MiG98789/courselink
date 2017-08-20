function addURLs() {
    var courses = document.getElementsByTagName("h2");

    for (var i = 0; i < courses.length; i++) {
        var courseCode = courses[i].innerHTML.slice(0,10).replace(/\s/g, '');
        console.log("Found " + courseCode);

        var url = "https://ust.space/review/" + courseCode;

        courses[i].innerHTML += " <a target='_blank' href=" + url + ">Rating</a>";
    }
}

function addCSS() {
    var css = [
    ].join('');

    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(css));

    document.head.appendChild(style);
}

if (document.readyState === "complete") {
    addCSS();
    addURLs();
}
